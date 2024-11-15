import { Router } from "express";
import {
  createCompany,
  getAllCompanies,
  getSingleCompany,
  updateCompany,
  deleteCompany,
} from "../controllers/companyController.js";
const router = Router();

router.route("/").post(createCompany).get(getAllCompanies);
router
  .route("/:id")
  .get(getSingleCompany)
  .patch(updateCompany)
  .delete(deleteCompany);

export default router;
