import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import { failed } from './utils/res.utils';
import routes from './routes/routes';


const app: Express = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json({ limit: '1024mb' }));
app.use(express.urlencoded({ extended: true }));

app.use((err: any, req: any, res: any, next: any) => failed({ res, err, status: 500, message: "Internal Server Error" }));

app.use("/api", routes);

app.get('/', (req: Request, res: Response) => {
    res.send('Hello from TypeScript Express server!');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

