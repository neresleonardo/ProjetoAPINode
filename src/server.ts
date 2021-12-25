import "reflect-metadata";
import express from "express";
import "./database"

const app = express();



app.listen(3000, () => console.log("Server is runner port 3000"));