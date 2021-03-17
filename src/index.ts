import * as express from 'express';

const app = express();
const port = 3000;
const root = `${process.cwd()}/dist`;

app.use(express.static(root));

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: root });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
