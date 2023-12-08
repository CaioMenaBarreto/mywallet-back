import { Router } from "express";
import authRouter from "./authRouter.js";
import transactionRouter from "./transactionRouter.js";

const index = Router();

index.use(authRouter);

index.use(transactionRouter);

export default index;