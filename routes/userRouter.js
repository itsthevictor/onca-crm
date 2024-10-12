import { Router } from "express";
import {
  getCurrentUser,
  getApplicationStats,
  updateUser,
  activateAccount,
} from "../controllers/userController.js";
import { authenticateUser } from "../middleware/authMiddleware.js";
const router = Router();

router.get("/current-user", authenticateUser, getCurrentUser);
router.patch("/activate-user", activateAccount);
router.get("/app-stats", authenticateUser, getApplicationStats);
router.patch("/update-user", authenticateUser, updateUser);

export default router;
