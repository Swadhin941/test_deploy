"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const config_1 = require("./config/config");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
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
app.use((err, req, res, next) => {
    console.error(err.message);
    res.status(500).send({ message: "Something went wrong" });
});
app.get("/", (req, res) => {
    res.send("Welcome to the Reilverse API");
});
app.get("/health", (req, res) => {
    res.status(200).send({ message: "Server is running" });
});
app.listen(config_1.port, () => {
    console.log(`Server is running on port ${config_1.port}`);
});
//# sourceMappingURL=index.js.map