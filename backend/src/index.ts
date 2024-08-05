import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import { failed, success } from './utils/res.utils';
import routes from './routes/routes';
import { PORT } from './config/env.config';


const app: Express = express();

app.use(cors());
app.use(express.json({ limit: '1024mb' }));
app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);
app.get('/', (req: Request, res: Response) => success({ res, message: "OK", result: new Date() }));
app.use((err: any, req: any, res: any, next: any) => failed({ res, err, status: 500, message: "Internal Server Error" }));

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

