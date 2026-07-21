
import connectDB from "./db/index.js";
import dotenv from "dotenv";
import { app } from "./app.js";
dotenv.config({
    path: './env'
});

connectDB()
.then(() => {
    console.log("Connected to database");
    app.on("error",(err) =>{
        console.log("err: ",err);
        throw err;  
    })
    app.listen(process.env.PORT || 8000, () =>{
        console.log(`Server is running on port ${process.env.PORT || 8000}`);
    })
})
.catch((err) => {
    console.log("Failed to connect to database", err);
})