import { db } from "../database/database.connection.js"
import { noHaveToken } from "../errors/noHaveToken.js"

// Middleware para validar a autenticação do usuário
export async function authValidation(req, res, next) {
    // Obtém o token do cabeçalho de autorização
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");

    // Se não houver token, lança um erro indicando a falta de token
    if (!token) throw noHaveToken();

    // Consulta o banco de dados para verificar a existência do token na tabela de sessions
    const session = await db.query(`SELECT * FROM sessions WHERE token = $1`, [token]);

    // Se não houver sessão correspondente ao token, lança um erro indicando a falta de token válido
    if (!session.rows.length) throw noHaveToken();

    // Armazena as informações da sessão nos locais res.locals para uso posterior na rota
    res.locals.session = session.rows[0];

    // Chama a próxima função no pipeline de middleware
    next();
};