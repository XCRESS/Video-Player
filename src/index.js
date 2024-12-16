<<<<<<< HEAD
import mongoose from "mongoose";
import {DB_NAME} from "./constants"

( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    } catch (error) {
        console.error("error",error);
        throw err
    }
})()
=======
import dotenv from 'dotenv'
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000)
    console.log(`sever running at port :${process.env.PORT}`);
    
})
.catch((error)=>{
    console.error("mongoDB connection error",error);
    
})
>>>>>>> e55609e337a39d230b95121befc04e59aa316951
