import Company from "../models/Company.js";

export const createCompany = async (req, res) => {
  res.send("created company");
};

export const getAllCompanies = async (req, res) => {
  res.send("all companies");
};

export const getSingleCompany = async (req, res) => {
  res.send(`get single company for id ${req.params.id}`);
};

export const updateCompany = async (req, res) => {
  res.send("update single company");
};

export const deleteCompany = async (req, res) => {
  res.send("delete company");
};
