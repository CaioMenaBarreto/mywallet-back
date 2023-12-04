import { Router } from "express";
import authRouter from "./authRouter.js";
import transactionRouter from "./transactionRouter.js";

//Aqui utilizamos um índice para que todas as rotas sejam chamadas aqui e no app.js apenas a váriavel "router" seja utilizada

// Criação de um objeto roteador utilizando a função Router do Express
const index = Router();

// Adiciona as rotas do roteador de autenticação (authRouter) ao índice
index.use(authRouter);

// Adiciona as rotas do roteador de transações (transactionRouter) ao índice
index.use(transactionRouter);

// Exporta o índice para ser utilizado em outros lugares do aplicativo Express
export default index;