import User from "../models/User.js";
import StatusCodes from "http-status-codes";
import { hashPassword } from "../utils/hashPassword.js";

export const register = async (req, res) => {
  const hashedPassword = await hashPassword(req.body.password);
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
