import dotenv from "dotenv";
import pgPromise from "pg-promise";

dotenv.config({ path: "../../.env.local" });
dotenv.config();

const pgp = pgPromise();

const dbConfig = {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT ?? ""),
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
};

console.log(dbConfig);

export const db = pgp(dbConfig);
