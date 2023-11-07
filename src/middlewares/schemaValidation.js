import { badRequestError } from "../errors/badRequestError.js";

// Função que verifica o corpo da requisição enviada pelo front e confere se todos os dados estão presentes 
// e no formato esperado utilizando os schemas criados com a biblioteca Joi
function schemaValidation(schema) {
    return (req, res, next) => {
        const validation = schema.validate(req.body, { abortEarly: false });
        if (validation.error) {
            const errors = validation.error.details.map(detail => detail.message);
            throw badRequestError(errors);
        }
        next();
    };
};

export default schemaValidation;