import User from "../models/User.js";
import StatusCodes from "http-status-codes";
import { comparePassword } from "../utils/passwordUtils.js";
import { UnauthenticatedError } from "../errors/customErrors.js";
import { createJWT } from "../utils/tokenUtils.js";
import crypto from "crypto";
import { sendVerificationEmail } from "../utils/sendVerificationEmail.js";
import { sendResetPasswordEmail } from "../utils/sendPasswordEmail.js";
import { hashString } from "../utils/createHash.js";

export const register = async (req, res) => {
  console.log(req.user);

  //  create verification token
  req.body.verificationToken = crypto.randomBytes(40).toString("hex");

  // create user
  const user = await User.create(req.body);
  // send verification email

  await sendVerificationEmail({
    name: user.firstName,
    email: user.email,
    verificationToken: user.verificationToken,
  });

  // return
  res.status(StatusCodes.CREATED).json({ user });
};

export const verifyEmail = async (req, res) => {
  const { token, email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw new UnauthenticatedError(`verification failed, no such user`);
  }
  if (user.verificationToken !== token) {
    throw new UnauthenticatedError(`verification failed, bad token`);
  }
  user.isVerified = true;
  user.verified = Date.now();
  user.verificationToken = "";
  await user.save();
  res.status(StatusCodes.OK).json({ msg: "email verified!" });
};

export const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  const isValidUser =
    user && (await comparePassword(req.body.password, user.password));
  if (!isValidUser) throw new UnauthenticatedError("invalid credentials");
  const token = createJWT({ userId: user._id, role: user.role });
  const oneDay = 1000 * 60 * 60 * 24;
  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    secure: process.env.NODE_ENV === "production",
  });
  res.status(StatusCodes.OK).json({ msg: "user logged in" });
};

export const logout = async (req, res) => {
  res.cookie("token", "logout", {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.status(StatusCodes.OK).json({ msg: "logged out" });
};

export const forgotPassword = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    const passwordToken = crypto.randomBytes(70).toString("hex");
    // send email
    await sendResetPasswordEmail({
      name: user.name,
      email: user.email,
      token: passwordToken,
    });
    const quarterH = 1000 * 60 * 15;
    const passwordTokenExpirationDate = new Date(Date.now() + quarterH);
    user.passwordToken = hashString(passwordToken);
    user.passwordTokenExpirationDate = passwordTokenExpirationDate;
    await user.save();
  }

  res
    .status(StatusCodes.OK)
    .json({ msg: "Please check your email for reset password link" });
};

export const resetPassword = async (req, res) => {
  const { token, email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    const currentDate = new Date();
    if (
      user.passwordToken === hashString(token) &&
      user.passwordTokenExpirationDate > currentDate
    ) {
      user.password = password;
      user.passwordToken = "";
      user.passwordTokenExpirationDate = "";

      await user.save();
    }
  }

  res.status(StatusCodes.OK).json({ msg: "password has been reset" });
};
