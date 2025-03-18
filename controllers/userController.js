import { StatusCodes } from 'http-status-codes';
import User from '../models/User.js';
import { hashPassword } from '../utils/passwordUtils.js';
import { UnauthorizedError } from '../errors/customErrors.js';
import cloudinary from 'cloudinary';
import { formatImage } from '../middleware/multerMiddleware.js';

export const getCurrentUser = async (req, res) => {
  const userWP = await User.findOne({ _id: req.user.userId });
  const user = userWP.toJSON();
  res.status(StatusCodes.OK).json({ user });
};

export const getAllUsers = async (req, res) => {
  let users = await User.find(
    { _id: { $ne: req.user.userId } },
    { password: 0 }
  );
  res.status(StatusCodes.OK).json({ users });
};

export const getApplicationStats = async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: 'application stats' });
};

export const activateAccount = async (req, res) => {
  const hashedPassword = await hashPassword(req.body.password);
  req.body.password = hashedPassword;
  const filter = { email: req.body.email };
  const update = { password: req.body.password };
  const updatedUser = await User.findOneAndUpdate(filter, update);
  res.status(StatusCodes.OK).json({ msg: 'user activat' });
};

export const updateUser = async (req, res) => {
  let newUser = { ...req.body };

  if (req.file) {
    const file = formatImage(req.file);
    const response = await cloudinary.v2.uploader.upload(file, {
      folder: `users`,
      resource_type: 'auto',
      fetch_format: 'webp',
      quality: 'auto:best',
    });
    newUser.avatar = response.secure_url;
    newUser.avatarPublicId = response.public_id;
  }

  const updatedUser = await User.findByIdAndUpdate(req.user.userId, newUser, {
    new: true,
  });

  if (req.file && updatedUser.avatarPublicId) {
    await cloudinary.v2.uploader.destroy(req.body.avatarPublicId);
  }

  res.status(StatusCodes.OK).json({ updatedUser });
};
