"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv = require("dotenv");
dotenv.config({ path: ".env.local" });
dotenv.config();
const app = (0, express_1.default)();
const port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
app.get("/", (req, res) => {
    res.send("Express + TypeScript Server test change");
});
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
