import express from "express";
import connectDB from "./mongodb/connect.js";

import cors from "cors";
import * as dotenv from "dotenv"
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit : '50'}));


app.listen(process.env.PORT || 8080 ,async ()=>{
    try {
        await connectDB(process.env.MONGODB_URL);
        console.log('listening at port 8080');
    } catch (error) {
        console.log(error.message)
    }
});

