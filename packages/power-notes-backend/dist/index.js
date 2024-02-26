"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const mockData_1 = require("./mock-data/mockData");
dotenv_1.default.config({ path: ".env.local" });
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
app.get("/", (req, res) => {
    res.json({ testMessage: "Hello world!!!" });
});
app.get("/folders", (_req, res) => {
    res.json(mockData_1.MOCK_FULL_FOLDER_DATA);
});
app.get("/folders/:folderId", (req, res) => {
    if (req.params.folderId) {
        res.json({ folder: mockData_1.MOCK_FOLDERS_DATA[req.params.folderId] });
    }
    throw new Error("Folder not found");
});
app.get("/note/:noteId", (req, res) => {
    if (req.params.noteId != null &&
        mockData_1.MOCK_NOTES_DATA[req.params.noteId] != null) {
        res.json(mockData_1.MOCK_NOTES_DATA[req.params.noteId]);
    }
    else {
        res.json({
            message: "Note not found",
        });
    }
});
app.get("/todo/:todoId", (req, res) => {
    if (req.params.todoId && mockData_1.MOCK_TODOS_DATA[req.params.todoId] != null) {
        res.json(mockData_1.MOCK_TODOS_DATA[req.params.todoId]);
    }
    throw new Error("Todo List not found");
});
app.get("/journal/:journalId", (req, res) => {
    if (req.params.journalId &&
        mockData_1.MOCK_JOURNALS_DATA[req.params.journalId] != null) {
        res.json(mockData_1.MOCK_JOURNALS_DATA[req.params.journalId]);
    }
    throw new Error("Journal not found");
});
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
