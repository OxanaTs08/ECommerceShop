import {Router} from "express";
import DeviceController from "../controllers/deviceController";
import {checkRoleMiddleware} from "../middleWares/checkRoleMiddleware";

const router = Router();

router.post('/create', checkRoleMiddleware ('ADMIN'), DeviceController.create)
router.get('/showAll', DeviceController.showAll)
router.get('/showOne', DeviceController.showOne)

export default router