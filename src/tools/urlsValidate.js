import Joi from "joi";

export const shortenSchema = Joi.object({
    authorization: Joi
            .string()
            .required(),
    url: Joi
            .string()
            .uri()
            .required()
});