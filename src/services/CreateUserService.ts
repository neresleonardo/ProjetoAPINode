import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean
}

class CreateUserService { 
    async execute({ name, email, admin} : IUserRequest) {
        const usersRepository = getCustomRepository(UsersRepositories);

        console.log("Email", email);
        
        // Se não tiver email aparecer Email incorrect
        if(!email){ 
            typeof new Error("email incorrect")
        }

        // Verifica se o email já existe
        const userAlreadyExists = await usersRepository.findOne({
            email,
        })
        if ( userAlreadyExists) {
            throw new Error("User alread exists")
        }
        // Caso ele ainda não exista( Criar um novo Email)
        const user = usersRepository.create({
            name,
            email,
            admin 
        })
        // Salvar tudo e retornar usuario
        await usersRepository.save(user);
        
        return user;
    }
}

export { CreateUserService}