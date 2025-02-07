import { Router } from "express";
import {
  forgotPassword,
  login,
  logout,
  register,
  resetPassword,
  verifyEmail,
} from "../controllers/authController.js";
import {
  validateLoginInput,
  validateUserInput,
} from "../middleware/validationMiddleware.js";

import {
  authenticateUser,
  authorizePermissions,
} from "../middleware/authMiddleware.js";

const router = Router();

router
  .route("/register")
  .post(authenticateUser, authorizePermissions(), validateUserInput, register);
router.route("/verify-email").post(verifyEmail);
router.route("/login").post(validateLoginInput, login);
router.route("/logout").get(logout);
router.route("/forgot-password").post(forgotPassword);
router.route("/reset-password").post(resetPassword);

export default router;
