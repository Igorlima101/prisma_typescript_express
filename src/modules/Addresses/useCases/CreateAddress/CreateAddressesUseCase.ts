import { Address } from '@prisma/client'

import { prisma } from '../../../../prisma/PrismaClient'
import { AppError } from './../../../../errors/AppError';
import { AddressDTO } from './../../dtos/AddressDTO';

export class CreateAddressesUseCase{
    async execute({zipcode, number, street, userEmail}:AddressDTO):Promise<Address> {

        const verifyUser = await prisma.user.findUnique({
            where:{
                email: userEmail
            }
        })

        if(!verifyUser){
            
            throw new AppError('User not found')
        }

    const address = await prisma.address.create({
        data:{
            zipcode,
            number,
            street,
            userEmail
        }
    })
        return address
        
        
}

}