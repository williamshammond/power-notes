"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const notesRoutes_1 = require("./notes/notesRoutes");
const foldersRoutes_1 = require("./folders/foldersRoutes");
const todosRoutes_1 = require("./todos/todosRoutes");
const journalsRoutes_1 = require("./journals/journalsRoutes");
dotenv_1.default.config({ path: "../../.env.local" });
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
app.get("/", (_req, res) => {
    res.json({ testMessage: "Hello world!!!" });
});
app.use("/folders/v1/", foldersRoutes_1.foldersRouter);
app.use("/journals/v1/", journalsRoutes_1.journalsRouter);
app.use("/notes/v1/", notesRoutes_1.notesRouter);
app.use("/todos/v1/", todosRoutes_1.todosRouter);
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
