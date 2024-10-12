import { StatusCodes } from "http-status-codes";
import User from "../models/User.js";
import { hashPassword } from "../utils/passwordUtils.js";

export const getCurrentUser = async (req, res) => {
  const userWP = await User.findOne({ _id: req.user.userId });
  const user = userWP.toJSON();
  res.status(StatusCodes.OK).json({ user });
};

export const getApplicationStats = async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: "application stats" });
};

export const activateAccount = async (req, res) => {
  const hashedPassword = await hashPassword(req.body.password);
  req.body.password = hashedPassword;
  const filter = { email: req.body.email };
  const update = { password: req.body.password };
  const updatedUser = await User.findOneAndUpdate(filter, update);
  res.status(StatusCodes.OK).json({ msg: "user activat" });
};

export const updateUser = async (req, res) => {
  const obj = { ...req.body };
  delete obj.password;
  const updatedUser = await User.findByIdAndUpdate(req.user.userId, obj);
  res.status(StatusCodes.OK).json({ updatedUser });
};
