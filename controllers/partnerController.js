export const createPartner = async (req, res) => {
  res.status(202).json({ msg: "created partner" });
};

export const getAllPartners = async (req, res) => {
  res.status(200).json({ msg: "got all partners" });
};

export const getSinglePartner = async (req, res) => {
  res.status(200).json({ msg: "got single partner" });
};

export const updatePartner = async (req, res) => {
  res.status(200).json({ msg: "updated partner" });
};

export const deletePartner = async (req, res) => {
  res.status(200).json({ msg: "deleted partner" });
};
