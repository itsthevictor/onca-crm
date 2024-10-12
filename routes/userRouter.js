import { Router } from "express";
import {
  getCurrentUser,
  getApplicationStats,
  updateUser,
  activateAccount,
} from "../controllers/userController.js";
const router = Router();

router.get("/current-user", getCurrentUser);
router.patch("/activate-user", activateAccount);
router.get("/app-stats", getApplicationStats);
router.patch("/update-user", updateUser);

export default router;
