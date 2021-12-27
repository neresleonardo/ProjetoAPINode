import "reflect-metadata"; // Importado por causa do TypeScript
import { router } from "./Router" // Rotas da Api
import express from "express"; // Biblioteca Express
import "./database" // Banco de Dados
const app = express();

app.use(express.json()); // Formato que vai ser entrege

app.use(router); // Rotas 

app.listen(3000, () => console.log("Server is runner port 3000")); // Porta do server 