import Company from "../models/Company.js";
import StatusCodes from "http-status-codes";

export const createCompany = async (req, res) => {
  const company = await Company.create(req.body);
  res.status(StatusCodes.CREATED).json({ company });
};

export const getAllCompanies = async (req, res) => {
  const companies = await Company.find();
  res.status(StatusCodes.OK).json({ companies });
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
