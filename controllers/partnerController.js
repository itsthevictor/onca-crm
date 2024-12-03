import Partner from "../models/Partner.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors/customErrors.js";
import axios from "axios";

export const createPartner = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const partner = await Partner.create(req.body);

  res.status(StatusCodes.CREATED).json({ partner });
};

export const getAllPartners = async (req, res) => {
  const partners = await Partner.find();
  res.status(StatusCodes.OK).json({ partners });
};
export const getMyPartners = async (req, res) => {
  const partners = await Partner.find({ createdBy: req.user.userId });
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

export const getPartnerData = async (req, res) => {
  try {
    const { data } = await axios.get(
      `https://infocui.ro/system/api/data?key=${process.env.INFO_CUI_API}&cui=${req.body.cui}`
    );
    if (!data) throw new NotFoundError("no data");
    const partnerData = data.data;
    res.status(StatusCodes.OK).json({ partnerData });
  } catch (error) {
    console.log(error);
    throw new BadRequestError("something went wrong");
  }
};
