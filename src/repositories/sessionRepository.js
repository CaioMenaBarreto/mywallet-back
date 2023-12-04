import { db } from "../database/database.connection.js";

// Função para criar uma nova sessão na tabela "sessions"
async function newSession(token, userId){
    const session = await db.query(`INSERT INTO sessions (token, "userId") VALUES ($1, $2)`, [token, userId])
    return session;
}

// Exporta um objeto contendo a função relacionada ao repositório de sessões
export const sessionRepository = {
    newSession
}