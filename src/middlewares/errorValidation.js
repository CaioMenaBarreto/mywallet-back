import httpStatus from "http-status";

// Middleware para tratar erros na aplicação
export default function errorMiddleware(error, req, res, next) {
    // Verifica o tipo de erro e retorna a resposta HTTP correspondente

    // Erro de Conflito (usuário ou recurso já existente)
    if (error.name === "ConflictError") return res.status(httpStatus.CONFLICT).send(error.message);

    // Erro de Não Encontrado
    if (error.name === "notFoundError" || error.name === "notFoundTransaction")
        return res.status(httpStatus.NOT_FOUND).send(error.message);

    // Erro de Conflito Genérico
    if (error.name === "Conflict") return res.status(httpStatus.CONFLICT).send(error.message);

    // Erro de Requisição Inválida
    if (error.name === "badRequestError")
        return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message);

    // Erro de Não Autorizado
    if (error.name === "unauthorizedError" || error.message === "Faça o login para acessar a sua carteira.")
        return res.status(httpStatus.UNAUTHORIZED).send(error.message);

    // Loga o erro no console e retorna uma resposta de erro interno do servidor
    console.error(error);
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR).send(error.message);
}
