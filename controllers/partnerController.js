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
  const partner = await Partner.findById(req.params.id);
  if (!partner) {
    return res.status(404).json({ msg: `no partner with id ${req.params.id}` });
  }
  res.status(200).json({ partner });
};

export const updatePartner = async (req, res) => {
  const updatedPartner = await Partner.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  if (!updatedPartner) {
    return res.status(404).json({ msg: `no partner with id ${req.params.id}` });
  }
  res.status(200).json({ msg: "partner modified", partner: updatedPartner });
};

export const deletePartner = async (req, res) => {
  const partner = await Partner.findByIdAndDelete(req.params.id);
  if (!partner) {
    return res.status(404).json({ msg: `no partner with id ${req.params.id}` });
  }
  res.status(200).json({ msg: `partner removed successfully` });
};
