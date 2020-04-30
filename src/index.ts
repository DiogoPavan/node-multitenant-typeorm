import 'dotenv/config';
import 'reflect-metadata';
import express from 'express';
import routes from './routes';

import './utils/DatabaseMaster';

import { connectAllDb } from './utils/connectionManager';

const app = express();

app.use(express.json());

connectAllDb();

app.use(routes);

app.listen(3000, () => console.log(`Server running`));
