import { Request, Response } from 'express'

import { CreateUserUseCase } from './CreateUserUseCase';

export class CreateUserController{
    async handle(req: Request, res:Response){

        const {name, number, email} = req.body
        
        const createUserUseCase = new CreateUserUseCase()

        const result = await createUserUseCase.execute({name, number, email})

        return res.status(201).json(result)
    }
}