import { db } from "../database/database.connection.js";
import { noHaveToken } from "../errors/noHaveToken.js";

export async function authValidation(req, res, next) {
    const { authorization } = req.headers
    const token = authorization?.replace("Bearer ", "")
    if (!token) throw noHaveToken();

    try {
        const session = await db.query("SELECT * FROM sessions WHERE token = $1", [token]);
        if (!session) throw noHaveToken()

        res.locals.session = session

        next()

    } catch (err) {
        res.status(500).send(err.message)
    }
}