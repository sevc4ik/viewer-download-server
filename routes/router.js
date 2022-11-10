import Router from 'express'
import VersionsController from '../controller/versionsController.js'
import path from 'path';

const router = new Router();

router.get('/versions', VersionsController.getVersions);
router.get('/download', async (req, res) => {
  const {client, platform, version} = req.query;
  const filename = '' + (version ? `${version}_` : '') + (platform ? `${platform}` : '') + (client ? `_${client}` : '') + '.txt';
  const __dirname = path.resolve();
  const filePath = `${__dirname}/files/${filename}`;
  try {
    res.download(filePath);
  } catch (e) {
    res.status(500).json(e);
  }
});

export default router;