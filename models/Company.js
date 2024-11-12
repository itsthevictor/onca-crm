import mongoose from "mongoose";

const CompanySchema = new mongoose.Schema({
  name: String,
  cui: String,
  registrationNumber: String,
  address: String,
  country: String,
  city: String,
  bankAccount: String,
});

export default mongoose.model("Company", CompanySchema);
