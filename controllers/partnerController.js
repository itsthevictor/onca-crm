import Partner from "../models/Partner.js";
import { StatusCodes } from "http-status-codes";
import { NotFoundError } from "../errors/customErrors.js";

export const createPartner = async (req, res) => {
  const partner = await Partner.create(req.body);
  res.status(StatusCodes.CREATED).json({ partner });
};

export const getAllPartners = async (req, res) => {
  const partners = await Partner.find();
  res.status(StatusCodes.OK).json({ partners });
};

export const getSinglePartner = async (req, res) => {
  const partner = await Partner.findById(req.params.id);
  res.status(StatusCodes.OK).json({ partner });
};

export const updatePartner = async (req, res) => {
  const updatedPartner = await Partner.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res
    .status(StatusCodes.OK)
    .json({ msg: "partner modified", partner: updatedPartner });
};

export const deletePartner = async (req, res) => {
  const partner = await Partner.findByIdAndDelete(req.params.id);
  res.status(StatusCodes.OK).json({ msg: `partner removed successfully` });
};
