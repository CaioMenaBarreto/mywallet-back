import { transactionRepository } from "../repositories/transactionRepository.js";

async function getTransactions(userId){
    const transactions = await transactionRepository.getTransactions(userId);
    return transactions;
}

async function postTransactions(userId, type, description, value){
    await transactionRepository.postTransactions(userId, type, description, value);
}

export const transactionService = {
    getTransactions,
    postTransactions
}