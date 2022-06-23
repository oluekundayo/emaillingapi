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

class DeleteService {
  
    //  >>>> Delete Borrow Books  >>>>

    deleteTable(params_tbl, params_title, params) {
        return new Promise((resolve, reject) => {
          try {
            mysqlConn.query(
                "DELETE FROM ?? WHERE ?? = ?",
                [params_tbl, params_title, params],
              function (err, rows) {
                if (err) {
                  reject(err);
                }
                let user = rows;
                if (!user) {
                  reject(err);
                }
                resolve(user);
              }
            );
          } catch (err) {
            reject(err);
          }
        });
    }
}
module.exports = DeleteService;
