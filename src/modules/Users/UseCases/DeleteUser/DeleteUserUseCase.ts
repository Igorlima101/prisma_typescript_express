import { User } from '@prisma/client'

import { prisma } from '../../../../prisma/PrismaClient'
import { UserDTO } from '../../Dtos/UserDTO'

export class DeleteUserUseCase{
    async execute({ email }){

        let user = await prisma.user.findUnique({
            where:{
                email: email
            }
        })
        
        if(!user){
            throw new Error('User does not found')
        }

        user = await prisma.user.delete({
            where:{
                email: email
            }
        })


}

}