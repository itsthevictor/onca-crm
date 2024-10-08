import { Router } from "express";
import { login, logout, register } from "../controllers/authController.js";
import { validateUserInput } from "../middleware/validationMiddleware.js";

const router = Router();

router.route("/register").post(validateUserInput, register);
router.route("/login").post(login);
router.route("/logout").get(logout);

export default router;
