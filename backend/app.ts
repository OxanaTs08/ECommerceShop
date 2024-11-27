import express from "express";
import dotenv from "dotenv";
import sequelize from "./db/db";
import { User, Basket, BasketDevice, Device, Type, Brand, Rating, DeviceInfo } from "./models/models";
import cors from "cors";
import userRouter from "./routers/user";
import deviceRouter from "./routers/device";
import brandRouter from "./routers/brand";
import typeRouter from "./routers/type";
import { errorMiddleware} from "./middleWares/ApiError";
import fileUpload from 'express-fileupload';
import path from "path";

dotenv.config({path: './.env'});

const app = express();
const port = process.env.PORT

app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({useTempFiles: true}));
app.use(cors());

app.use('/user', userRouter);
app.use('/brand', brandRouter);
app.use('/device', deviceRouter);
app.use('/type', typeRouter);
app.use(errorMiddleware);


const start = async () => {
    try{
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        })
    }
    catch(error) {
        console.log(error);
    }
}
start()
   


