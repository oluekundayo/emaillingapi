const { badJson, goodJson } = require("../helpers");

const usersSQLSchema = require("../database-schema");

const badJsonWithRes = (err, code) => badJson(res, err, code);
const goodJsonWithRes = (data, code) => goodJson(res, data, code);

let mysqlConfig = {
    ...require("../config/mysql"),
    multipleStatements: true,
  };
  delete mysqlConfig.database;

const { isDevelopment } = require("../config");
const mysqlConn = require("mysql").createConnection(require("../config/mysql"));

class InsertService {
  
  //  >>>> Inserting Users Table  >>>>
  InsertTable(tbl_type, params) {
    return new Promise((resolve, reject) => {
      // console.log(mysqlConn)
      try {
        let sql = `INSERT INTO ${tbl_type} SET ?`,
            fillers = [params];
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
      } catch (err) {
        reject(err);
      }
    });
  }
}
module.exports = InsertService;
