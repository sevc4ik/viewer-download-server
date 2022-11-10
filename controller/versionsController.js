import database from "../database.js";
import versionsService from "../service/versionsService.js";

class VersionsController {
  async getVersions(req, res) {
    try {
      const data = await versionsService.getVersions(req.query);
      return res.json(data);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new VersionsController();
