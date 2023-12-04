import { badRequestError } from "../errors/badRequestError.js";

// Função de validação de esquema usando Joi
function schemaValidation(schema) {
    // Retorna um middleware que valida o corpo da requisição
    return (req, res, next) => {
        // Valida o corpo da requisição com base no esquema fornecido
        const validation = schema.validate(req.body, { abortEarly: false });

        // Se houver erros de validação, lança um erro de requisição inválida
        if (validation.error) {
            // Mapeia os detalhes dos erros para uma lista de mensagens
            const errors = validation.error.details.map(detail => detail.message);
            throw badRequestError(errors);
        }

        // Passa para o próximo middleware se a validação for bem-sucedida
        next();
    };
}

export default schemaValidation;