import User from "../models/User.js";
import StatusCodes from "http-status-codes";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  req.body.password = hashedPassword;
  const user = await User.create(req.body);
  res.status(StatusCodes.CREATED).json({ user });
};

export const login = async (req, res) => {
  res.json({ msg: "login user" });
};

export const logout = async (req, res) => {
  res.json({ msg: "logout user" });
};
