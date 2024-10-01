import { Router } from "express";

import { testController } from "../controllers/authController.js";

const router = Router();

router.route("/test").get(testController);

export default router;
