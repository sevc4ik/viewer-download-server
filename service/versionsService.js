import fs from "fs";

class VersionsService {
  async getVersions() {
    return new Promise((resolve, reject) => {
      fs.readFile("./data.json", "utf8", (err, jsonString) => {
        if (err) {
          reject();
        }
        resolve(JSON.parse(jsonString).versions);
      });
    });
  }
}

export default new VersionsService();
