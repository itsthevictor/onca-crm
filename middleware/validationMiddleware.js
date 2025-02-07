import { body, validationResult, param } from "express-validator";
import { BadRequestError, NotFoundError } from "../errors/customErrors.js";
import { PARTNER_PREFIX, PARTNER_SUFFIX } from "../utils/constants.js";
import mongoose from "mongoose";
import Partner from "../models/Partner.js";
import User from "../models/User.js";
import { validateRomanianCIF } from "../utils/cuiUtils.js";

const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);
        if (errorMessages[0].startsWith("no partner"))
          throw new NotFoundError(errorMessages);
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

export const validateIdParam = withValidationErrors([
  param("id").custom(async (value) => {
    const isValidId = mongoose.Types.ObjectId.isValid(value);
    if (!isValidId) throw new Error("invalid MongoDB id");
    const partner = await Partner.findById(value);
    if (!partner) throw new NotFoundError(`no partner with id ${value}`);
  }),
]);

export const validateUserInput = withValidationErrors([
  body("firstName").notEmpty().withMessage("user first name is required"),
  body("lastName").notEmpty().withMessage("user last name is required"),
  body("email")
    .notEmpty()
    .withMessage("emailul este necesar")
    .isEmail()
    .withMessage("format invalid pentru email")
    .custom(async (email) => {
      const user = await User.findOne({ email });
      if (user) {
        throw new BadRequestError("email already in use");
      }
    }),
  // body("password")
  //   .notEmpty()
  //   .withMessage("password is required")
  //   .isLength({ min: 8 })
  //   .withMessage("password must be at least 8 characters long"),
]);

export const validateLoginInput = withValidationErrors([
  body("email")
    .notEmpty()
    .withMessage("emailul este necesar")
    .isEmail()
    .withMessage("format invalid pentru email"),
  body("password").notEmpty().withMessage("password is required"),
]);

export const validateCuiInput = async (req, res, next) => {
  const { cui } = req.body;
  if (!cui) throw new BadRequestError("cui-ul este necesar");
  try {
    const validCui = validateRomanianCIF(cui);
    if (validCui !== true) {
      throw new BadRequestError(validCui);
    }
    next();
  } catch (error) {
    throw new BadRequestError("cui-ul nu este valid");
  }
};

export const validateForgotPasswordInput = withValidationErrors([
  body("email")
    .notEmpty()
    .withMessage("emailul este necesar")
    .isEmail()
    .withMessage("format invalid pentru email"),
]);

export const validateResetPasswordInput = withValidationErrors([
  body("token").notEmpty().withMessage("vă rugăm încercați din nou"),
  body("email")
    .notEmpty()
    .withMessage("emailul este necesar")
    .isEmail()
    .withMessage("format invalid pentru email"),
  body("password").notEmpty().withMessage("vă rugăm introduceți o parolă nouă"),
]);
