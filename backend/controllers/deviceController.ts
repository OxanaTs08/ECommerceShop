import {Device, DeviceInfo} from "../models/models";
import { Request, Response, NextFunction } from "express";
import ApiError from "../error/apiError";
import uuid from "uuid"
import path from "path";

class DeviceController {
    async create(req: Request, res: Response, next: NextFunction) {
        try {
        const {name, price, brandId, typeId, info} = req.body
        const files = req.files 
        const {img} = files || {}
        let fileName = uuid.v4() + ".jpg"
        if (img && (!Array.isArray(img) || (Array.isArray(img) && img.length))) {
            if (Array.isArray(img)) {
                img[0].mv(path.resolve(__dirname, '..', 'static', fileName));
            } else {
                img.mv(path.resolve(__dirname, '..', 'static', fileName));
            }
        }

        const device = await Device.create({name, price, brandId, typeId, img: fileName}) 

        if(info) {
            const parsedInfo = JSON.parse(info)
            parsedInfo.forEach((i: any) => {
                DeviceInfo.create({
                    title: i.title,
                    description: i.description,
                    deviceId: device.id
                })
            })
        }
        
        res.json(device) 
        return
        } catch (error: any) {
            next(ApiError.badRequest(error.message))
        }
        
    }
    async showOne(req: Request, res: Response, next: NextFunction) {
        const {id} = req.params
        const device = await Device.findOne({where: {id},
        include: [{model: DeviceInfo, as: 'info'}]})

        res.json(device)
        return
    }
    async showAll(req: Request, res: Response, next: NextFunction) {
        const {brandId, typeId, limit: limitParam, page: pageParam} = req.query
        let page = Number(pageParam) || 1
        let limit = Number(limitParam) || 9
        let offset = page * limit - limit

        let devices
        if (!brandId && !typeId) {
            devices = await Device.findAndCountAll({limit, offset})
            
        }
        if (brandId && !typeId) {
            devices = await Device.findAndCountAll({where: {brandId}}, limit, offset)
        }
        if (!brandId && typeId) {
            devices = await Device.findAndCountAll({where: {typeId}},limit, offset)
        }
        if (brandId && typeId) {
            devices = await Device.findAndCountAll({where: {typeId, brandId}}, limit, offset)
        }
        res.json(devices)
        return
    }
}

export default new DeviceController();