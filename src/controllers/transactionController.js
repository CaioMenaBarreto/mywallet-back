import httpStatus from "http-status";
import { transactionService } from "../services/transactionService.js";

// Obtém todas as transações para o usuário autenticado
export async function getTransactions(req, res) {
    // Obtém o ID do usuário a partir da sessão
    const sessions = res.locals.session;
    const userId = sessions.userId;

    // Chama o serviço para obter as transações
    const transactions = await transactionService.getTransactions(userId);

    // Envia as transações como resposta
    res.status(httpStatus.OK).send(transactions);
}

// Cria uma nova transação para o usuário autenticado
export async function postTransactions(req, res) {
    // Extrai os dados da requisição
    const { value, description, type } = req.body;
    const sessions = res.locals.session;
    const userId = sessions.userId;

    // Chama o serviço para criar uma nova transação
    await transactionService.postTransactions(userId, type, description, value);

    // Retorna uma resposta indicando que a transação foi criada com sucesso
    res.sendStatus(httpStatus.CREATED);
}

// Exclui uma transação com base no ID fornecido
export async function deleteTransaction(req, res) {
    // Obtém o ID da transação da URL
    const { id } = req.params;
    const sessions = res.locals.session;
    const userId = sessions.userId;

    // Chama o serviço para excluir a transação
    await transactionService.deleteTransaction(id, userId);

    // Retorna uma resposta indicando que a transação foi excluída com sucesso
    res.sendStatus(httpStatus.ACCEPTED);
}

// Edita uma transação com base no ID fornecido
export async function editTransaction(req, res) {
    // Obtém o ID da transação da URL
    const { id } = req.params;
    const { value, description } = req.body;
    const sessions = res.locals.session;
    const userId = sessions.userId;

    // Chama o serviço para editar a transação
    await transactionService.editTransaction(id, value, description, userId);

    // Retorna uma resposta indicando que a transação foi editada com sucesso
    res.sendStatus(httpStatus.ACCEPTED);
}
