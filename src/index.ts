import * as express from 'express';
import * as dotenv from 'dotenv';
import * as utils from './utils/paths';

import indexRouter from './controllers/index.router';

dotenv.config();

const app = express();
const port = process.env.PORT ?? 80;

app.use(express.static(utils.root)); // serve static files like .html and .css
app.use(express.json()); // accept requests with json body
app.use(express.urlencoded({ extended: true })); // accept html form submissions

app.use('/', indexRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
