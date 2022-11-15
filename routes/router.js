import Router from "express";
import VersionsController from "../controller/versionsController.js";
import path from "path";
import fs from "fs";

const router = new Router();

router.get("/versions", VersionsController.getVersions);
router.get("/download", async (req, res) => {
  const { fn } = req.query;
  const __dirname = path.resolve();
  const filePath = `${__dirname}/files/${fn}.exe`;

  if (fs.existsSync(filePath)) {
    try {
      res.download(filePath);
    } catch (e) {
      res.status(500).json(e);
    }
  } else {
    res.status(404).json("fileNotFound");
  }
});40

export default router;
