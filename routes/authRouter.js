import { Router } from "express";
import {
  login,
  logout,
  register,
  verifyEmail,
} from "../controllers/authController.js";
import {
  validateLoginInput,
  validateUserInput,
} from "../middleware/validationMiddleware.js";

const router = Router();

router.route("/register").post(validateUserInput, register);
router.route("/verify-email").post(verifyEmail);
router.route("/login").post(validateLoginInput, login);
router.route("/logout").get(logout);

export default router;
