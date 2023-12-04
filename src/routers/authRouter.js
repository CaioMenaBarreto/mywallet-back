import { Router } from "express";
import { signInSchema, signUpSchema } from "../schemas/authSchema.js";
import { authController } from "../controllers/authController.js";
import schemaValidation from "../middlewares/schemaValidation.js";

const authRouter = Router();

//Rotas de autenticação

// Rota para o endpoint de registro (sign-up)
authRouter.post("/sign-up", schemaValidation(signUpSchema), authController.signUp)

// Rota para o endpoint de login (sign-in)
authRouter.post("/", schemaValidation(signInSchema), authController.signIn)

export default authRouter;