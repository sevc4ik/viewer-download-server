import versionsService from "../service/versionsService.js";

class VersionsController {
  async getVersions(req, res) {
    try {
      const data = await versionsService.getVersions();
      return res.json({
        currentVersion: req.query.currver,
        client: req.query.client,
        versions: data,
      });
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new VersionsController();
