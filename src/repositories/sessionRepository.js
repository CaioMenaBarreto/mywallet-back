import { db } from "../database/database.connection.js";

//Acesso ao banco de dados na tabela de sessions
async function newSession(token, userId){
    const session = await db.query(`INSERT INTO sessions (token, "userId") VALUES ($1, $2)`, [token, userId])
    return session;
}

export const sessionRepository = {
    newSession
}