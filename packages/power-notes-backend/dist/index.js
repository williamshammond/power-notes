"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const mockData_1 = require("./mock-data/mockData");
const pg_promise_1 = __importDefault(require("pg-promise"));
dotenv_1.default.config({ path: "../../.env.local" });
dotenv_1.default.config();
const pgp = (0, pg_promise_1.default)();
const dbConfig = {
    host: process.env.DB_HOST,
    port: parseInt((_a = process.env.DB_PORT) !== null && _a !== void 0 ? _a : ""),
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
};
console.log("Connecting to DB with:", dbConfig);
const db = pgp(dbConfig);
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const port = (_b = process.env.PORT) !== null && _b !== void 0 ? _b : 3000;
app.post("/setupTable", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const checkTableExists = yield db.oneOrNone("SELECT to_regclass('public.my_table')");
        if (checkTableExists.to_regclass) {
            yield db.none("DROP TABLE public.my_table");
        }
        yield db.none(`
            CREATE TABLE public.my_table (
                name VARCHAR(255),
                value INTEGER
            )
        `);
        yield db.tx((t) => {
            const queries = [
                t.none("INSERT INTO public.my_table(name, value) VALUES($1, $2)", ["test1", 123]),
                t.none("INSERT INTO public.my_table(name, value) VALUES($1, $2)", ["test2", 456]),
            ];
            return t.batch(queries);
        });
        res.json({ message: "Table created and seeded successfully" });
    }
    catch (error) {
        console.log("ERROR:", error);
        res.json({ message: "Setup failed", error });
    }
}));
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
        return res.json({ Message: "Note not found" });
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
