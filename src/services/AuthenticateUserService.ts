import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { sign } from "jsonwebtoken"
import { compare} from "bcryptjs"

interface IAuthenticateRequest {
    email:string,
    password: string,
}

class AuthenticateUserService {
    async execute({email, password} : IAuthenticateRequest) {

        const usersRepository = getCustomRepository(UsersRepositories);


        // Verificar se email existe

        const user = await usersRepository.findOne({
            email
        })

        if(!user) {
            throw new Error("Email/Password incorrect")
        }

        // Verificar se senha está correta

      const passwordMath =   await compare(password, user.password) 

        if(!passwordMath) {
            throw new Error("Email/Password incorrect")
        }
     
        // Gerar Token 

        const token = sign({
            email: user.email
        }, "4f1b06e2af52b3d204e33435479b52c1", {
            subject: user.id,
            expiresIn: "1d",
        } )
        return token

    }
}

export { AuthenticateUserService }