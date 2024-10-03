import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { dot } from "node:test/reporters";

dotenv.config();



mongoose.connect(process.env.MONGO).then(() => {
    console.log("MONGO CONNECTED");
}).catch((err) => {
    console.log("Error:" + err);
});

const app = express();

app.listen(3000, () => {
    console.log("Running Port 3000! ");
});
