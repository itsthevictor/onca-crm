import { Router } from "express";
import {
  createPartner,
  getAllPartners,
  getSinglePartner,
  updatePartner,
  deletePartner,
} from "../controllers/partnerController.js";
import { validatePartnerInput } from "../middleware/validationMiddleware.js";

const router = Router();

router.route("/").post(validatePartnerInput, createPartner).get(getAllPartners);
router
  .route("/:id")
  .get(getSinglePartner)
  .post(updatePartner)
  .patch(validatePartnerInput, updatePartner)
  .delete(deletePartner);

export default router;
