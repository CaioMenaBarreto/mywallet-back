import { transactionRepository } from "../repositories/transactionRepository.js";

async function getTransactions(UserId){
    const transactions = await transactionRepository.getTransactions(UserId);
    return transactions;
}

export const transactionService = {
    getTransactions
}