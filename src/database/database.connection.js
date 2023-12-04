import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

// Importando a biblioteca pg para interação com o PostgreSQL
const { Pool } = pg;

// Configurações para conexão com o banco de dados
const configDatabase = {
    connectionString: process.env.DATABASE_URL,
};

// Adicionando a opção SSL à configuração se o ambiente for produção
if (process.env.NODE_ENV === "production") {
    configDatabase.ssl = true;
}

// Criando uma instância do Pool para conexão com o banco de dados
console.log('Conexão com o banco de dados bem-sucedida!');
export const db = new Pool(configDatabase);
