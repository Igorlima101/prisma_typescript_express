import { User } from '@prisma/client'

import { prisma } from '../../../../prisma/PrismaClient'
import { UserDTO } from '../../Dtos/UserDTO'
import { AppError } from './../../../../errors/AppError';

export class CreateUserUseCase {

    async execute({name, number, email}: UserDTO): Promise<User>{

        const userAlreadyExists = await prisma.user.findUnique({
            where: {
                email
            }
        })

        if(userAlreadyExists){
            throw new AppError('User already exists')
        }
        
        const user = await prisma.user.create({
            data:{
                name,
                number,
                email
            }
        })

        return user;
    }

    
}