import { body, validationResult } from "express-validator";
import { BadRequestError } from "../errors/customErrors.js";
import { PARTNER_PREFIX, PARTNER_SUFFIX } from "../utils/constants.js";

const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);
        throw new BadRequestError(errorMessages);
      }
      next();
    },
  ];
};

export const validatePartnerInput = withValidationErrors([
  body("name").notEmpty().withMessage("company name is required"),
  body("prefix")
    .isIn(Object.values(PARTNER_PREFIX))
    .withMessage("invalid company prefix"),
  body("suffix")
    .isIn(Object.values(PARTNER_SUFFIX))
    .withMessage("invalid company suffix"),
]);
