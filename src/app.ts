import express from 'express'
import { NextFunction, Request, Response } from 'express'

import { AppError } from './errors/AppError';
import { routes } from './routes'

import 'express-async-errors'

const app = express()

app.use(express.json())

app.use(routes)

app.use((err:Error, req: Request, res:Response, next: NextFunction) => {
    if(err instanceof AppError){
        return res.status(err.statusCode).json({
            status: "error",
            message: err.message
        })
    }

    return res.status(500).json({
        status: "error",
        message: `Internal Server Error - ${err.message}`
    })
})

app.listen(3333, () => {
    console.log('Server is running')
})