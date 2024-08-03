import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port = process.env.PORT || 3001;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello from TypeScript Express server!');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

