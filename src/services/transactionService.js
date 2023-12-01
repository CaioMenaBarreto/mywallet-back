import { notFoundTransaction } from "../errors/notFoundTransaction.js";
import { transactionRepository } from "../repositories/transactionRepository.js";

async function getTransactions(userId) {
    const transactions = await transactionRepository.getTransactions(userId);
    return transactions;
}

async function postTransactions(userId, type, description, value) {
    await transactionRepository.postTransactions(userId, type, description, value);
}

async function deleteTransaction(id, userId) {

    const transactionId = Number(id);
    if (!transactionId) throw notFoundTransaction();

    const result = await transactionRepository.deleteTransaction(transactionId, userId);
    
    return result;
}

export const transactionService = {
    getTransactions,
    postTransactions,
    deleteTransaction
}