import mongoose from "mongoose";

const PartnerSchema = new mongoose.Schema(
  {
    name: String,

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
    registrationNumber: String,
    address: String,
    county: String,
    city: String,
    bank: String,
    bankAccount: String,
    type: {
      type: String,
      enum: ["lead", "client"],
      default: "lead",
    },
    measures: [],
    status: String,
    VAT: Boolean,
  },
  { timestamps: true }
);

export default mongoose.model("Partner", PartnerSchema);
