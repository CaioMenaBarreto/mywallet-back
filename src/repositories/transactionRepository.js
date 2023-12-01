import dayjs from "dayjs";
import { db } from "../database/database.connection.js";

//Acesso ao banco de dados na tabela de transactions
async function getTransactions(userId) {
    const transactions = await db.query(`SELECT * FROM transactions WHERE "userId" = $1`, [userId]);
    return transactions.rows;
}

async function postTransactions(userId, type, description, value) {
    await db.query('INSERT INTO transactions ("userId", type, description, value, date) VALUES ($1, $2, $3, $4, $5)', [userId, type, description, value, dayjs().format('DD-MM-YYYY')]);
}



export const transactionRepository = {
    getTransactions,
    postTransactions
}