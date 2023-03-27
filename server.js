import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv'
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js'
import cors from "cors"
import categoryRoutes from './routes/categoryRoutes.js'
import productRoutes from './routes/productRoutes.js'



//configure env
dotenv.config();

//database config
connectDB();




//rest object
const app=express()


//midddlewares
app.use(cors());
app.use(express.json())
app.use(morgan('dev'))


//routes
app.use('/api/v1/auth',authRoutes)
app.use('/api/v1/category',categoryRoutes)
app.use("/api/v1/product", productRoutes);

//rest api

app.get('/',(req,res)=>{

    res.send("<h1>Welcome E-commerce Fruits,Vegetable APP</h1>")

})


//PORT
const port =process.env.PORT || 8080;

//Run

app.listen(port,()=>{
    console.log(`Server Running on ${process.env.DEV_MODE} Mode  on port ${port}`.bgCyan.white);
})