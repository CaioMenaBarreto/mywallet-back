import { db } from "../database/database.connection.js";

//Acesso ao banco de dados na tabela de transactions
async function getTransactions(UserId){
    const transactions = await db.query(`SELECT * FROM transactions WHERE "userId" = $1`, [UserId]);
    return transactions.rows;
}

export const transactionRepository = {
    getTransactions
}