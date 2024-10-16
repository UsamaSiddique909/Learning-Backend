import dotenv from "dotenv";
// import mongoose from "mongoose"
// import { DB_NAME } from "./constant";
// import express from "express"
import connectDB from "./db/index.js"


dotenv.config({
    path: './env'
})


connectDB()
.then()
.catch((err)=>{
    console.log("Mongo DB conection failed",err)
})


/*(async ()=>{
    try{
        await mongoose.connect('${process.env.MONGODB_URI}/${DB_NAME}')
        app.on("error",(error)=>{
            console.log("ERRR:", error );
            throw error
        })
        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on port ${process.env.PORT}`)
        })
    }
    catch(error){
        console.log("ERRR: ", error)
        throw err
    }

})()*/