import httpStatus from "http-status";
import { conflictError } from "../errors/conflictError.js";
import { notFoundError } from "../errors/notFoundError.js";
import { authRepository } from "../repositories/authRepository.js";
import { unauthorizedError } from "../errors/unauthorizedError.js";
import bcrypt from "bcrypt";
import { sessionRepository } from "../repositories/sessionRepository.js";
import { v4 as uuid } from "uuid";

async function signUp(name, email, password) {
    const verifyUser = await authRepository.verifyUser(email);
    if (verifyUser.rows.length > 0) throw conflictError();

    const hash = bcrypt.hashSync(password, 10);

    const newUser = await authRepository.signUp(name, email, hash);
    return "ok";
}

async function signIn(email, password) {
    const user = await authRepository.verifyUser(email);
    if (user.rows.length === 0) throw notFoundError();

    const isPasswordCorrect = bcrypt.compareSync(password, user.rows[0].password)
    if (!isPasswordCorrect) throw unauthorizedError();

    const token = uuid();
    await sessionRepository.newSession(token, user.rows[0].id);

    return { id: user.rows[0].id, userName: user.rows[0].username, token: token }
}

export const authService = {
    signUp,
    signIn
}