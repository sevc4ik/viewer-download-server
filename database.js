import sqlite3 from "sqlite3";

class database {
  connectToDb = async () => {
    const DBSOURCE = "./test.db";
    sqlite3.verbose();
    const db = await new sqlite3.Database(DBSOURCE, sqlite3.OPEN_READONLY, (err) => {
      if (err) return console.error(err);
      else console.log("Connected to the SQlite database.");
    });
    return db;
  }
}

  

export default new database();
