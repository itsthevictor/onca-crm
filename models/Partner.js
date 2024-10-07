import mongoose from "mongoose";
import { PARTNER_PREFIX, PARTNER_SUFFIX } from "../utils/constants.js";

const PartnerSchema = new mongoose.Schema(
  {
    name: String,

    prefix: {
      type: String,
      enum: Object.values(PARTNER_PREFIX),
      default: PARTNER_PREFIX.SC,
    },
    suffix: {
      type: String,
      enum: Object.values(PARTNER_SUFFIX),
      default: PARTNER_PREFIX.SRL,
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
