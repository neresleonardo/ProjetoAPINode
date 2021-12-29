import {  Router } from "express" // Importando Rotas do empress
import { CreateUserController } from "./controllers/CreateUserController" // Importando o controle do usuario 
import { CreateTagController } from "./controllers/CreateTagController" // Importando o controle do usuario 
import { ensureAdmin } from "./middlewares/ensureAdmin"
import { AuthenticateUserController } from "./controllers/AuthenticateUserController"

const router = Router() // Rota

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController()

router.post("/users", createUserController.handle) // Criando uma rota post para criar usuarios 
router.post("/login", authenticateUserController.handle)
router.post("/tags", ensureAdmin, createTagController.handle) // Criando uma rota post para criar uma tag 

export { router } // Exportando rota