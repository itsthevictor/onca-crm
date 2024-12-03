import { Router } from "express";
import {
  createPartner,
  getAllPartners,
  getSinglePartner,
  updatePartner,
  deletePartner,
  getMyPartners,
  getPartnerData,
} from "../controllers/partnerController.js";
import {
  validatePartnerInput,
  validateIdParam,
  validateCuiInput,
} from "../middleware/validationMiddleware.js";

const router = Router();

router.route("/").post(validatePartnerInput, createPartner).get(getAllPartners);
router.route("/my-partners").get(getMyPartners);
router.route("/get-data").post(validateCuiInput, getPartnerData);
router
  .route("/:id")
  .get(validateIdParam, getSinglePartner)
  .patch(validateIdParam, validatePartnerInput, updatePartner)
  .delete(validateIdParam, deletePartner);

export default router;
