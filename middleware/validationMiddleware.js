import { body, validationResult } from "express-validator";
import { BadRequestError } from "../errors/customErrors";

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

export const validateTest = withValidationErrors([
  body("name")
    .notEmpty()
    .withMessage("name is required \n")
    .isLength({ min: 4 })
    .withMessage("name must be at least 4 characters long \n")
    .trim(),
]);
