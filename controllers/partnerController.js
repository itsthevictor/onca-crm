import Partner from "../models/Partner.js";

export const createPartner = async (req, res) => {
  const partner = await Partner.create(req.body);
  res.status(201).json({ partner });
};

export const getAllPartners = async (req, res) => {
  const partners = await Partner.find();
  res.status(200).json({ partners });
};

export const getSinglePartner = async (req, res) => {
  const { id } = req.params;
  const partner = await Partner.findById(id);
  res.status(200).json({ partner });
};

export const updatePartner = async (req, res) => {
  res.status(200).json({ msg: "updated partner" });
};

export const deletePartner = async (req, res) => {
  res.status(200).json({ msg: "deleted partner" });
};
