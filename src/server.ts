import "reflect-metadata";
import { router } from "./Router"
import express from "express";
import "./database"
const app = express();

app.use(express.json());

app.use(router);

app.listen(3000, () => console.log("Server is runner port 3000"));