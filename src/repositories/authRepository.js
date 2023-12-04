import { db } from "../database/database.connection.js";

// Função para verificar a existência de um usuário com base no e-mail
async function verifyUser(email){
    const user = await db.query(`SELECT * FROM users WHERE email = $1;`, [email]);
    return user
}

// Função para registrar um novo usuário na tabela "users"
async function signUp(name, email, password) {
    return db.query(`INSERT INTO users (username, email, password) VALUES ($1, $2, $3)`, [name, email, password]);
}

// Exporta um objeto contendo as funções relacionadas ao repositório de autenticação
export const authRepository = {
    signUp,
    verifyUser
}