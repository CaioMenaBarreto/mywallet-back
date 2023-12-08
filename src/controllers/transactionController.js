import httpStatus from "http-status";
import { transactionService } from "../services/transactionService.js";

export async function getTransactions(req, res) {
    const sessions = res.locals.session;
    const userId = sessions.userId;

    const transactions = await transactionService.getTransactions(userId);

    res.status(httpStatus.OK).send(transactions);
}

export async function postTransactions(req, res) {
    const { value, description, type } = req.body;
    const sessions = res.locals.session;
    const userId = sessions.userId;

    await transactionService.postTransactions(userId, type, description, value);

    res.sendStatus(httpStatus.CREATED);
}

export async function deleteTransaction(req, res) {
    const { id } = req.params;
    const sessions = res.locals.session;
    const userId = sessions.userId;

    await transactionService.deleteTransaction(id, userId);

    res.sendStatus(httpStatus.ACCEPTED);
}

export async function editTransaction(req, res) {
    const { id } = req.params;
    const { value, description } = req.body;
    const sessions = res.locals.session;
    const userId = sessions.userId;

    await transactionService.editTransaction(id, value, description, userId);

    res.sendStatus(httpStatus.ACCEPTED);
}
