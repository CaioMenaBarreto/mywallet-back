import { Router } from "express";
import authRouter from "./authRouter.js";
import transactionRouter from "./transactionRouter.js";

//Aqui utilizamos um índice para que todas as rotas sejam chamadas aqui e no app.js apenas a váriavel "router" seja utilizada
const index = Router();

index.use(authRouter);
index.use(transactionRouter);

export default index;