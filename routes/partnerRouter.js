import { Router } from "express";
import {
  createPartner,
  getAllPartners,
  getSinglePartner,
  updatePartner,
  deletePartner,
} from "../controllers/partnerController.js";

const router = Router();

router.route("/").post(createPartner).get(getAllPartners);
router
  .route("/:id")
  .get(getSinglePartner)
  .post(updatePartner)
  .patch(updatePartner)
  .delete(deletePartner);

export default router;
