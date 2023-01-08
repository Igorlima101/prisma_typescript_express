import { Request, Response } from 'express'

import { CreateAddressesUseCase } from './CreateAddressesUseCase';

export class CreateAddressesController{
    async handle(req: Request, res: Response){

    const {zipcode, number, street, userEmail} = req.body

    const createAddressesUseCase = new CreateAddressesUseCase()

    const result = await createAddressesUseCase.execute({zipcode, number, street, userEmail})

    return res.status(200).json(result)

    }
}