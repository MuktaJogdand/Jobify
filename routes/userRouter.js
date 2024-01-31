import { Router } from "express";
import { getApplicationStats, getCurrentUser, updateUser } from "../controllers/userController.js";
import { validationUpdateUserInput } from "../middleware/validationMiddleware.js";
import { checkForTestUser, authorizePermissions } from "../middleware/authMiddleware.js";
import upload from "../middleware/multerMiddleware.js";
const router = Router();

router.get('/current-user', getCurrentUser);
router.get('/admin/app-stats', [authorizePermissions('admin'), getApplicationStats]);
router.patch('/update-user' , checkForTestUser, upload.single('avatar'), validationUpdateUserInput , updateUser);

export default router;