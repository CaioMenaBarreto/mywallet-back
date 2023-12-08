import { db } from "../database/database.connection.js";

async function verifyUser(email){
    const user = await db.query(`SELECT * FROM users WHERE email = $1;`, [email]);
    return user
}

async function signUp(name, email, password) {
    return db.query(`INSERT INTO users (username, email, password) VALUES ($1, $2, $3)`, [name, email, password]);
}

export const authRepository = {
    signUp,
    verifyUser
}