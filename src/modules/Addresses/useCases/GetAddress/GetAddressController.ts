import { Request, Response } from 'express'

import { GetAddressUseCase } from './GetAddressUseCase';

export class GetAddressController{
    async handle(req:Request, res: Response){

        const getAddressUseCase = new GetAddressUseCase()

        const result = await getAddressUseCase.execute()

        return res.status(200).json(result)
    }
}