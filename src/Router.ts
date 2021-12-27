import {  Router } from "express" // Importando Rotas do empress
import { CreateUserController } from "./controllers/CreateUserController" // Importando o controle do usuario 

const router = Router() // Rota

const createUserController = new CreateUserController();

router.post("/users", createUserController.handle) // Criando uma rota post para criar usuarios 

export { router } // Exportando rota