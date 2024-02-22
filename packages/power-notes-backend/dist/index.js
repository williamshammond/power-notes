"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
dotenv_1.default.config({ path: ".env.local" });
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
app.get("/", (req, res) => {
    res.json({ testMessage: "Hello world!!!" });
});
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
