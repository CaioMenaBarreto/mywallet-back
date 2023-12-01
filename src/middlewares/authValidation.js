import { db } from "../database/database.connection.js"
import { noHaveToken } from "../errors/noHaveToken.js"

export async function authValidation(req, res, next) {
    const { authorization } = req.headers;
    console.log(authorization);
    const token = authorization?.replace("Bearer ", "");
    console.log(token);

    if (!token) throw noHaveToken();

    const session = await db.query(`SELECT * FROM sessions WHERE token = $1`, [token]);

    if (!session.rows.length) throw noHaveToken();

    res.locals.session = session.rows[0];

    next();
};