import { Router } from 'express';
import {
  aggregation,
  repeatEmailForVerifyUser,
  uploadAvatar,
  verifyUser,
} from '../../controllers/users';
import guard from '../../middleware/guard';
import { upload } from '../../middleware/upload';
import roleAccess from '../../middleware/role-access';
import { Role } from '../../lib/constants';
const usersRouter = new Router();

usersRouter.get('/stats/:id', guard, roleAccess(Role.ADMIN), aggregation);
usersRouter.patch('/avatar', guard, upload.single('avatar'), uploadAvatar);
usersRouter.get('/verify/:token', verifyUser);
usersRouter.post('/verify', repeatEmailForVerifyUser);
export default usersRouter;
