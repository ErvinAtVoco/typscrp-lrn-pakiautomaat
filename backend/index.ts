import express, { Express, Request, Response } from "express";
import cors from "cors";
import pakiautomaat from "./controllers/pakiautomaat";

const app: Express = express();

app.use(cors({
    origin: ['http://localhost:3006']
}));

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.use('/', pakiautomaat);

app.listen(3000,() => {
    console.log(`[server]: Server is running at http://localhost:3000`);
});