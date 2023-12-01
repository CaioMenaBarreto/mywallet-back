import httpStatus from "http-status";
import { transactionService } from "../services/transactionService.js";

export async function getTransactions(req, res) {
    const sessions = res.locals.session;

    if (sessions.length > 0) {
        const userId = sessions[0].userId;

        const transactions = await transactionService.getTransactions(userId);
        res.status(httpStatus.OK).send(transactions);
    } else {
        res.status(httpStatus.UNAUTHORIZED).send("Sessão inválida ou expirada");
    }
}

export async function postTransactions(req, res) {
    const { value, description, type } = req.body
    const sessions = res.locals.session
    const userId = sessions[0].userId;

    await transactionService.postTransactions(userId, type, description, value)
    res.sendStatus(httpStatus.CREATED)
}