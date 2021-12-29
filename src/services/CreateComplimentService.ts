import { getCustomRepository, ReturningStatementNotSupportedError } from "typeorm"
import { ComplimentsRespositories } from "../repositories/ComplimentsRespositories"
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IComplimentRequest {
    tag_id: string,
    user_sender: string,
    user_receiver: string, 
    message: string;
}

class CreateComplimentService {
    async execute( { tag_id, user_sender, user_receiver, message} : IComplimentRequest ){

        const complimentsRepositories = getCustomRepository(ComplimentsRespositories);
        const usersRepositories = getCustomRepository(UsersRepositories);

        const userReceiverExists = await usersRepositories.findOne(user_receiver)
        // Usuario não pode enviar para ele mesmo 
        if(user_sender === user_receiver) {
            throw new Error("INCORRECT USER RECEIVER")
        }
        // Vendo se o Usuario existe
        if(!userReceiverExists) {
            throw new Error("USER RECEIVER DOES NOT EXISTS")
        }

        const compliment = complimentsRepositories.create({
            tag_id,
            user_sender,
            user_receiver,
            message,
        })

        await complimentsRepositories.save(compliment)

        return compliment;
    }
}

export { CreateComplimentService }