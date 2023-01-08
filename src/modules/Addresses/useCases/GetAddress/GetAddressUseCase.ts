import { Address } from '@prisma/client'

import { prisma } from '../../../../prisma/PrismaClient'

export class GetAddressUseCase{
    async execute():Promise<Address[]>{

         const result = await prisma.address.findMany({})

         return result
    }
}