import { createMiddleware } from '@mswjs/http-middleware';
import { loadEnvConfig } from '@next/env';
import express from 'express';
import cors from 'cors';

loadEnvConfig(process.cwd());

const app = express();
const port = 9090;
const { handlers } = require('./handlers');

app.get('/', (_, res) => {
  res.send();
});

app.use(cors({ origin: '*', optionsSuccessStatus: 200, credentials: true }));
app.use(express.json());
app.use(createMiddleware(...handlers));
// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Mock server is running on port: ${port}`));
