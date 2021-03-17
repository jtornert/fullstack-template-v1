import * as express from 'express';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT ?? 80;
const root = `${process.cwd()}/dist`;

app.use(express.static(root));

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: root });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
