import { notFoundTransaction } from "../errors/notFoundTransaction.js";
import { transactionRepository } from "../repositories/transactionRepository.js";

// Função para obter as transações de um usuário
async function getTransactions(userId) {
    const transactions = await transactionRepository.getTransactions(userId);
    return transactions;
}

// Função para adicionar uma nova transação
async function postTransactions(userId, type, description, value) {
    await transactionRepository.postTransactions(userId, type, description, value);
}

// Função para deletar uma transação com base no ID e no ID do usuário
async function deleteTransaction(id, userId) {
    const transactionId = Number(id);
    if (!transactionId) throw notFoundTransaction();

    const result = await transactionRepository.deleteTransaction(transactionId, userId);

    return result;
}

// Função para editar uma transação com base no ID, valor, descrição e ID do usuário
async function editTransaction(id, value, description, userId) {
    const transactionId = Number(id);
    if (isNaN(transactionId)) throw notFoundTransaction();
    if (!transactionId) throw notFoundTransaction();

    const result = await transactionRepository.editTransaction(value, description, transactionId, userId);
    return result;
}

// Exportando um objeto com as funções relacionadas aos serviços de transações
export const transactionService = {
    getTransactions,
    postTransactions,
    deleteTransaction,
    editTransaction
}