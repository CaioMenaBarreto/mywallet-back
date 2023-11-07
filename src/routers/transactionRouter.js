import { Router } from "express"
import { authValidation } from "../middlewares/authValidation.js";
import { getTransactions } from "../controllers/transactionController.js";

const transactionRouter = Router();

transactionRouter.get("/transactions", authValidation, getTransactions);

export default transactionRouter;
