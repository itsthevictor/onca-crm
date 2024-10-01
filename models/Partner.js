import mongoose from "mongoose";

const PartnerSchema = new mongoose.Schema({
  name: {
    String,
  },
  prefix: {
    type: String,
    enum: ["S.C.", "P.F.", "P.F.A."],
    default: "account",
  },
  suffix: {
    type: String,
    enum: ["S.R.L.", "S.A.", "S.N.C.", "S.C.S.", "S.C.A.", "G.I.E."],
    default: "account",
  },
  CUI: String,
  RegistrationNumber: String,
  Street: String,
  County: String,
  City: String,
  Bank: String,
  BankAccount: String,
  type: {
    type: String,
    enum: ["lead", "client"],
    default: "lead",
  },
  measures: [],
  status: String,
});

export default mongoose.model("Partner", PartnerSchema);
