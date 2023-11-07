import { Router } from "express";
import { signInSchema, signUpSchema } from "../schemas/authSchema.js";
import { authController } from "../controllers/authController.js";
import schemaValidation from "../middlewares/schemaValidation.js";

const authRouter = Router();

//Rotas de autenticação
authRouter.post("/sign-up", schemaValidation(signUpSchema), authController.signUp)
authRouter.post("/", schemaValidation(signInSchema), authController.signIn)

export default authRouter;