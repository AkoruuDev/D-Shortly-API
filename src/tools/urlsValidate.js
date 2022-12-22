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

export const idSchema = Joi.object({
        id: Joi
                .number()
                .required()
                .min(1)
});

export const urlSchema = Joi.object({
        url: Joi
                .string()
                .required()
                .length(10)
});