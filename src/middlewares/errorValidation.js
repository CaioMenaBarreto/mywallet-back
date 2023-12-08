import httpStatus from "http-status";

export default function errorMiddleware(error, req, res, next) {
    if (error.name === "ConflictError") return res.status(httpStatus.CONFLICT).send(error.message);

    if (error.name === "notFoundError" || error.name === "notFoundTransaction")
        return res.status(httpStatus.NOT_FOUND).send(error.message);

    if (error.name === "Conflict") return res.status(httpStatus.CONFLICT).send(error.message);

    if (error.name === "badRequestError")
        return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message);

    if (error.name === "unauthorizedError" || error.message === "Faça o login para acessar a sua carteira.")
        return res.status(httpStatus.UNAUTHORIZED).send(error.message);

    console.error(error);
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR).send(error.message);
}
