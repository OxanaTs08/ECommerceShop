import {Router} from "express";
import BrandController from "../controllers/brandController";
import { checkRoleMiddleware } from "../middleWares/checkRoleMiddleware";


const router = Router();

router.post('/create',checkRoleMiddleware ('ADMIN'), BrandController.create)
router.get('/showAll', BrandController.showAll)
router.get('/showOne', BrandController.showOne)

export default router