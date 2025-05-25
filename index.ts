import  express from "express";
import cors from "cors";
import { port } from "./config/config";

const app = express();

app.use(cors());
app.use(express.json());

// 404 Page
// app.use(
//     (
//         req: express.Request,
//         res: express.Response,
//         next: express.NextFunction
//     ): void => {
//         res.status(404).send({ message: "Page not found" });
//     }
// );

//Error handling Globally
app.use(
    (
        err: any,
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ): void => {
        console.error(err.message);
        res.status(500).send({ message: "Something went wrong" });
    }
);

app.get("/", (req: express.Request, res: express.Response) => {
    res.send("Welcome to the Reilverse API");
});

app.get("/health", (req: express.Request, res: express.Response) => {
    res.status(200).send({ message: "Server is running" });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
