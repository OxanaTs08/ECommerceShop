import {Router} from "express";
import TypeController from "../controllers/typeController";
import { checkRoleMiddleware } from "../middleWares/checkRoleMiddleware";

const router = Router();

router.post('/create', checkRoleMiddleware('ADMIN'), TypeController.create)
router.get('/showAll', TypeController.showAll)
router.get('/showOne', TypeController.showOne)

export default router