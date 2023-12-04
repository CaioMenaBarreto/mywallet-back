import dayjs from "dayjs";
import { db } from "../database/database.connection.js";

// Função para obter as transações de um usuário
async function getTransactions(userId) {
    const transactions = await db.query(`SELECT * FROM transactions WHERE "userId" = $1`, [userId]);
    return transactions.rows;
}

// Função para adicionar uma nova transação
async function postTransactions(userId, type, description, value) {
    await db.query('INSERT INTO transactions ("userId", type, description, value, date) VALUES ($1, $2, $3, $4, $5)', [userId, type, description, value, dayjs().format('DD-MM-YYYY')]);
}

// Função para deletar uma transação com base no ID e no ID do usuário
async function deleteTransaction(id, userId) {
    return await db.query(`DELETE FROM transactions WHERE id = $1 AND "userId" = $2`, [id, userId]);
}

// Função para editar uma transação com base no ID, valor, descrição e ID do usuário
async function editTransaction(value, description, id, userId){
    const result = await db.query(`UPDATE transactions SET value = $1, 
    description = $2 WHERE id = $3 AND "userId" = $4;`, [value, description, id, userId]);
    return result;
}

// Exportando um objeto com as funções relacionadas ao repositório de transações
export const transactionRepository = {
    getTransactions,
    postTransactions,
    deleteTransaction,
    editTransaction
}