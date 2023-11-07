import { db } from "./database/database.connection.js";
import express from "express";
import "express-async-errors";
import cors from "cors";
import dotenv from "dotenv";
import index from "./routers/indexRouter.js";
import errorMiddleware from "./middlewares/errorValidation.js";

// Configurando a aplicação para utilizar o express e o dotenv
const app = express();
dotenv.config();

// Utilizando o express, cors, router e o middleware de erros
app.use(express.json());
app.use(cors());
app.use(index);
app.use(errorMiddleware);

// Configurando a porta para uma possível váriavel de porta no aquivo .env, se essa váriavel de ambiente não existir roda automaticamente na porta 5000 
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`O servidor está rodando na porta ${port}`));