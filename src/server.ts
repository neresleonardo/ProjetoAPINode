import "reflect-metadata"; // Importado por causa do TypeScript
import { router } from "./Router" // Rotas da Api
import express, { Request, Response, NextFunction } from "express"; // Biblioteca Express
import "./database" // Banco de Dados
const app = express();

app.use(express.json()); // Formato que vai ser entrege

app.use(router); // Rotas 

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if(err instanceof Error) {
        return response.status(400).json({
            error: err.message
        })
    }

    return response.status(500).json({
        status: "error",
        message: "Internal Server Error "
    })
})

app.listen(3000, () => console.log("Server is runner port 3000")); // Porta do server 