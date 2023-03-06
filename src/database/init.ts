import { DatabaseConnection } from './connection';

var db: any = null;
export default class DatabaseInit {
  constructor() {
    db = DatabaseConnection.getConnection();
    db.exec([{ sql: 'PRAGMA foreign_keys = ON;', args: [] }], false, () =>
      console.log('Foreign keys turned on')
    );
    this.InitDb();
  }
  private InitDb() {
    var sql = [
      `create table if not exists code (
            id integer primary key autoincrement,
            name text,
            data text,
            type text,
            date timestamp default current_timestamp
            );`,
    ];

    db.transaction(
      (tx: { executeSql: (arg0: string) => void }) => {
        for (var i = 0; i < sql.length; i++) {
          console.log('execute sql : ' + sql[i]);
          tx.executeSql(sql[i]);
        }
      },
      (error: any) => {
        console.log('error call back : ' + JSON.stringify(error));
        console.log(error);
      },
      () => {
        console.log('transaction complete call back ');
      }
    );
  }
}
