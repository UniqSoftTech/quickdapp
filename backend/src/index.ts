import express, { Express, Request, Response } from 'express';
import timeout from 'connect-timeout';
import cors from 'cors';

import { failed, success } from './utils/res.utils';
import { getVersion } from './utils/version.utils';
import { PORT } from './config/env.config';
import routes from './routes/routes';

const app: Express = express();

app.use(timeout('300s'));
app.use(cors({ origin: '*', methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS' }));
app.use(express.json({ limit: '1024mb' }));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => success({ res, message: "OK", status: 200, result: getVersion() }));
app.get('/test', (req: Request, res: Response) => success({ res, message: "ITS WORKING", status: 200, result: getVersion() }));

app.use("/api", routes);
app.use((err: any, req: any, res: any, next: any) => failed({ res, err }));

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

