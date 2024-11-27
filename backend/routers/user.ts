import {Router} from "express";
import userController from "../controllers/userController";
import authenticateJWT from "../middleWares/authMiddleWare";

const router = Router();

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/check',authenticateJWT, userController.check)

export default router