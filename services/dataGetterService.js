const { badJson, goodJson } = require("../helpers");

const badJsonWithRes = (err, code) => badJson(res, err, code);
const goodJsonWithRes = (data, code) => goodJson(res, data, code);
const usersSQLSchema = require("../database-schema");

const { isDevelopment } = require("../config");
// const mysqlConn = require("mysql").createConnection(
//   require("../config/mysql")
// );
let mysqlConfig = {
  ...require("../config/mysql"),
  multipleStatements: true,
};
delete mysqlConfig.database;

const mysqlConn = require("mysql").createConnection(mysqlConfig);

// const mysqlError = (error, code = 500) => {
//   mysqlConn.end();
//   badJsonWithRes(error, code);
// };

class UserService {
  //  >>>> User Data  >>>>

  findAllTableData(tbl_type) {
    return new Promise((resolve, reject) => {
      try {
        mysqlConn.query(usersSQLSchema, (err, res) => {
          if (err) reject(err);
          let sql = `SELECT * FROM ?? ORDER BY id DESC`,
            fillers = [tbl_type];

          mysqlConn.query(sql, fillers, function (err, rows) {
            if (err) {
              reject(err);
            }
            let user = rows;
            if (!user) {
              reject(err);
            }
            resolve(user);
          });
        });
      } catch (err) {
        reject(err);
      }
    });
  }

  findTableData(tbl_type, params_title, params) {
    return new Promise((resolve, reject) => {
      try {
        mysqlConn.query(usersSQLSchema, (err, res) => {
          if (err) reject(err);
          let sql = `SELECT * FROM ??`,
            wheres = ["?? = ?"],
            fillers = [tbl_type, params_title, params];

          sql += ` WHERE (${wheres.join(") AND (")})`;
          mysqlConn.query(sql, fillers, function (err, rows) {
            if (err) {
              reject(err);
            }
            let user = rows;
            if (!user) {
              reject(err);
            }
            resolve(user);
          });
        });
      } catch (err) {
        reject(err);
      }
    });
  }

  SearchDataTable(
    tbl_type,
    params_title_one,
    params_one,
    params_title_two,
    params_two
  ) {
    return new Promise((resolve, reject) => {
      try {
        mysqlConn.query(usersSQLSchema, (err, res) => {
          if (err) reject(err);
          let sql = `SELECT * FROM ?? AS a`,
            wheres = ["a.?? = ?"],
            fillers = [tbl_type, params_title_one, params_one];

          wheres.push("a.?? = ?");
          fillers = [...fillers, ...[params_title_two, params_two]];

          sql += ` WHERE (${wheres.join(") AND (")})`;

          mysqlConn.query(sql, fillers, function (err, rows) {
            if (err) {
              reject(err);
            }
            let user = rows;
            if (!user) {
              reject(err);
            }
            resolve(user);
          });
        });
      } catch (err) {
        reject(err);
      }
    });
  }
}
module.exports = UserService;
