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