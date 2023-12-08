import { badRequestError } from "../errors/badRequestError.js";

function schemaValidation(schema) {
    return (req, res, next) => {
        const validation = schema.validate(req.body, { abortEarly: false });

        if (validation.error) {
            const errors = validation.error.details.map(detail => detail.message);
            throw badRequestError(errors);
        }

        next();
    };
}

export default schemaValidation;