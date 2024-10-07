import { Router } from "express";
import {
  createPartner,
  getAllPartners,
  getSinglePartner,
  updatePartner,
  deletePartner,
} from "../controllers/partnerController.js";
import {
  validatePartnerInput,
  validateIdParam,
} from "../middleware/validationMiddleware.js";

const router = Router();

router.route("/").post(validatePartnerInput, createPartner).get(getAllPartners);
router
  .route("/:id")
  .get(validateIdParam, getSinglePartner)
  .patch(validateIdParam, validatePartnerInput, updatePartner)
  .delete(validateIdParam, deletePartner);

export default router;
