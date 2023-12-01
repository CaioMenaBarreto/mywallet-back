import httpStatus from "http-status";

//Função que armazena os erros da aplicação
export default function errorMiddleware(error, req, res, next){

    if (error.name === "ConflictError") return res.status(httpStatus.CONFLICT).send(error.message);
    if (error.name === "notFoundError") return res.status(httpStatus.NOT_FOUND).send(error.message);
    if (error.name === "Conflict") return res.status(httpStatus.CONFLICT).send(error.message);
    if (error.name === "badRequestError") return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message);
    if (error.name === "unauthorizedError") return res.status(httpStatus.UNAUTHORIZED).send(error.message);
    if (error.message === "Faça o login para acessar a sua carteira.") return res.status(httpStatus.UNAUTHORIZED).send(error.message);

    console.log(error.message);
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR).send(error.message);
}