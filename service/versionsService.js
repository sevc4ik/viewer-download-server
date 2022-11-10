import database from "../database.js";
import { filterData } from "../utils/filterData.js";
import { getSqlQuery } from "../utils/getSqlQuery.js";

class VersionsService {
  async getVersions(params) {
    const {currver, client} = params;

    return new Promise(async (resolve) => {
      const db = await database.connectToDb();
      const sql = getSqlQuery(client);
      db.all(sql, async (err, rows) => {
        if (err) {
          return res.status(400).json({ error: err.message });
        }
        console.log(rows.length)
        resolve(filterData(rows, currver, client));
      });
    });
  }
}

export default new VersionsService();
