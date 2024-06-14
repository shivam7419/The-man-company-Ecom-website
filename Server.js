import express from 'express'
import colors from 'colors'
import dotenv, { config } from 'dotenv'
import morgan from 'morgan'
import connectDB from './config/db.js'
import AuthRoutes from './config/Modal/Routes/AuthRoute.js'
import categoryRoutes from './config/Modal/Routes/categoryRoutes.js'
import productRoutes from './config/Modal/Routes/productRoutes.js'
import cors from 'cors'
import path from 'path'
import {fileURLToPath} from 'url'

//configure env
dotenv.config();
//esmodule
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


//databse config
connectDB();

//rest object
const app = express();

//middelwares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//static file
app.use(express.static(path.join(__dirname, './client/build')))

//routes
app.use("/api/v1/auth", AuthRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);
app.use('*', function (res, req) {
    res.sendFile(path.join(__dirname, './client/build/index.html'))
})
//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
    console.log(
        `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
            .white
    );
});
