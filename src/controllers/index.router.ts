import * as express from 'express';
import * as utils from '../utils/paths';

const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile('index.html', { root: utils.root });
});

export default router;
