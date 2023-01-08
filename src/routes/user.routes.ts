import { Router } from 'express'

import { GetUserController } from '../modules/Users/UseCases/GetUser/GetUserController';
import { CreateUserController } from './../modules/Users/UseCases/CreateUser/CreateUserController';
import { DeleteUserController } from './../modules/Users/UseCases/DeleteUser/DeleteUserController';

const userRoutes = Router()

const createUserControllerRoutes = new CreateUserController()
const getUserControllerRoutes = new GetUserController()
const deleteUserControllerRoutes = new DeleteUserController()

userRoutes.post('/post', createUserControllerRoutes.handle)
userRoutes.get('/get', getUserControllerRoutes.handle)
userRoutes.get('/delete/:email', deleteUserControllerRoutes.handle)

export {userRoutes}