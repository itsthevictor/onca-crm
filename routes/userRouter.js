import { Router } from 'express';
import {
  getCurrentUser,
  getApplicationStats,
  updateUser,
  activateAccount,
  getAllUsers,
} from '../controllers/userController.js';
import {
  authenticateUser,
  authorizePermissions,
} from '../middleware/authMiddleware.js';

import upload from '../middleware/multerMiddleware.js';

const router = Router();
router.get('/', authenticateUser, authorizePermissions('admin'), getAllUsers);
router.get('/current-user', authenticateUser, getCurrentUser);
router.patch('/activate-user', activateAccount);
router.get('/app-stats', authenticateUser, getApplicationStats);
router.patch(
  '/update-user',
  authenticateUser,
  upload.single('avatar'),
  updateUser
);

export default router;
