import { User } from '@prisma/client'

import { prisma } from '../../../../prisma/PrismaClient'

export class GetUserUseCase{ 
    async execute(): Promise<User[]>{

        const user = await prisma.user.findMany({
            include:{
                address:{
                    select:{
                        zipcode: true,
                        street: true,
                        number: true
                    }
                }
            }
        })

        return user
    }
}