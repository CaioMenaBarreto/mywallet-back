import httpStatus from "http-status";
import { authService } from "../services/authService.js";

async function signUp(req, res) {
    const { name, email, password } = req.body;
    await authService.signUp(name, email, password);

    res.sendStatus(httpStatus.CREATED);
}

async function signIn(req, res) {
    const { email, password } = req.body
    const user = await authService.signIn(email, password);

    res.status(httpStatus.OK).send({ id: user.id , token: user.token, userName: user.userName })
}


export const authController = {
    signUp,
    signIn
}