import express from "express";
import connectDB from "./mongodb/connect.js";
import postRoutes from './routes/postroutes.js';
import dalleRoutes from './routes/dalleRoutes.js';


import cors from "cors";
import * as dotenv from "dotenv"
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit : '50'}));

app.use('/api/v1/post',postRoutes);
app.use('/api/v1/dalle',dalleRoutes);


app.get('/', async (req, res) =>{ res.send('Hello from PIXEL!');
} )
const startServer = async () => {

    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(8080, () => console.log('Server has started on port http://localhost: 8080'))
    } catch (error) {
        console.log(error);
    }
}
startServer();
