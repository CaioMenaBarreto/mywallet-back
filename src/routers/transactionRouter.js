import { Router } from "express"
import { authValidation } from "../middlewares/authValidation.js";
import { getTransactions, postTransactions } from "../controllers/transactionController.js";
import schemaValidation from "../middlewares/schemaValidation.js";
import { transactionSchema } from "../schemas/transactionSchema.js";

const transactionRouter = Router();

transactionRouter.get("/transactions", authValidation, getTransactions);
transactionRouter.post("/transactions", authValidation, schemaValidation(transactionSchema), postTransactions)


export default transactionRouter;
