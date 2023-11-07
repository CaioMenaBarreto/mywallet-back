import httpStatus from "http-status";
import { transactionService } from "../services/transactionService.js";

export async function getTransactions(req, res){
    const { UserId } = res.locals.session;

    const transactions = await transactionService.getTransactions(UserId);
    res.status(httpStatus.OK).send(transactions);
}