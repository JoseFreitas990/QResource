import { DatabaseConnection } from '../database/connection';
import { Code } from '../models/code.model';

const table = 'code';
const db = DatabaseConnection.getConnection();

export default class CodeService {
  static addData(param: Code) {
    return new Promise((resolve, reject) =>
      db.transaction(
        (tx) => {
          tx.executeSql(
            `insert into ${table} (name, data, type)
                values (?,?,?)`,
            [param.name, param.data, param.type],
            (_, { insertId, rows }) => {
              console.log('id insert: ' + insertId);
              resolve(insertId);
            }
          ),
            (sqlError: any) => {
              console.log(sqlError);
            };
        },
        (txError) => {
          console.log(txError);
        }
      )
    );
  }

  static deleteById(id: number) {
    db.transaction(
      (tx) => {
        tx.executeSql(
          `delete from ${table} where id = ?;`,
          [id],
          (_, { rows }) => {}
        ),
          (sqlError: any) => {
            console.log(sqlError);
          };
      },
      (txError) => {
        console.log(txError);
      }
    );
  }

  static updateById(param: Code) {
    return new Promise((resolve, reject) =>
      db.transaction(
        (tx) => {
          tx.executeSql(
            `update ${table} set nome = ? where id = ?;`,
            [param.name],
            () => {}
          ),
            (sqlError: any) => {
              console.log(sqlError);
            };
        },
        (txError) => {
          console.log(txError);
        }
      )
    );
  }

  static findById(id: number) {
    return new Promise((resolve, reject) =>
      db.transaction(
        (tx) => {
          tx.executeSql(
            `select * from ${table} where id=?`,
            [id],
            (_, { rows }) => {
              resolve(rows);
            }
          ),
            (sqlError: any) => {
              console.log(sqlError);
            };
        },
        (txError) => {
          console.log(txError);
        }
      )
    );
  }

  static findAll() {
    return new Promise((resolve, reject) =>
      db.transaction(
        (tx) => {
          tx.executeSql(`select * from ${table}`, [], (_, { rows }) => {
            resolve(rows);
          }),
            (sqlError: any) => {
              console.log(sqlError);
            };
        },
        (txError) => {
          console.log(txError);
        }
      )
    );
  }
}
