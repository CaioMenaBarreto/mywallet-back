import dayjs from "dayjs";
import { db } from "../database/database.connection.js";

async function getTransactions(userId) {
    const transactions = await db.query(`SELECT * FROM transactions WHERE "userId" = $1`, [userId]);
    return transactions.rows;
}

async function postTransactions(userId, type, description, value) {
    await db.query('INSERT INTO transactions ("userId", type, description, value, date) VALUES ($1, $2, $3, $4, $5)', [userId, type, description, value, dayjs().format('DD-MM-YYYY')]);
}

async function deleteTransaction(id, userId) {
    return await db.query(`DELETE FROM transactions WHERE id = $1 AND "userId" = $2`, [id, userId]);
}

async function editTransaction(value, description, id, userId){
    const result = await db.query(`UPDATE transactions SET value = $1, 
    description = $2 WHERE id = $3 AND "userId" = $4;`, [value, description, id, userId]);
    return result;
}

export const transactionRepository = {
    getTransactions,
    postTransactions,
    deleteTransaction,
    editTransaction
}