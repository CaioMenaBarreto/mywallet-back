import { Router } from "express"
import { authValidation } from "../middlewares/authValidation.js";
import { deleteTransaction, editTransaction, getTransactions, postTransactions } from "../controllers/transactionController.js";
import schemaValidation from "../middlewares/schemaValidation.js";
import { transactionSchema } from "../schemas/transactionSchema.js";

// Criação de um objeto roteador utilizando a função Router do Express
const transactionRouter = Router();

// Rota para obter todas as transações
transactionRouter.get("/transactions", authValidation, getTransactions);

// Rota para criar uma nova transação
transactionRouter.post("/transactions", authValidation, schemaValidation(transactionSchema), postTransactions);

// Rota para excluir uma transação com base no ID
transactionRouter.delete("/transactions/:id", authValidation, deleteTransaction);

// Rota para editar uma transação com base no ID
transactionRouter.put("/transactions/:id", authValidation, schemaValidation(transactionSchema), editTransaction);

// Exporta o roteador de transações para ser utilizado em outros lugares do aplicativo Express
export default transactionRouter;
