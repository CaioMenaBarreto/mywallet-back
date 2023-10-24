import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

// Conexão com o banco de dados
const { Pool } = pg;

const configDatabase = {
    connectionString: process.env.DATABASE_URL,
};
console.log('Conexão com o banco de dados bem sucedida!');


// Exportando váriavel que permite conxão com o banco de dados
export const db = new Pool(configDatabase);