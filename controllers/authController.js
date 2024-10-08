import User from "../models/User.js";
import StatusCodes from "http-status-codes";

export const register = async (req, res) => {
  const user = await User.create(req.body);
  res.status(StatusCodes.CREATED).json({ user });
};

export const login = async (req, res) => {
  res.json({ msg: "login user" });
};

export const logout = async (req, res) => {
  res.json({ msg: "logout user" });
};
