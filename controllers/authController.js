import User from "../models/User.js";
import StatusCodes from "http-status-codes";
import { hashPassword, comparePassword } from "../utils/passwordUtils.js";
import { UnauthenticatedError } from "../errors/customErrors.js";

export const register = async (req, res) => {
  const hashedPassword = await hashPassword(req.body.password);
  req.body.password = hashedPassword;
  const user = await User.create(req.body);
  res.status(StatusCodes.CREATED).json({ user });
};

export const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  const isValidUser =
    user && (await comparePassword(req.body.password, user.password));

  if (!isValidUser) throw new UnauthenticatedError("invalid credentials");

  res.status(StatusCodes.OK).json([user]);
};

export const logout = async (req, res) => {
  res.json({ msg: "logout user" });
};
