import { Router } from 'express'

import { CreateAddressesController } from '../modules/Addresses/useCases/CreateAddress/CreateAddressesController';
import { GetAddressController } from './../modules/Addresses/useCases/GetAddress/GetAddressController';

const addressRoutes = Router()

const createAddressesControllerRoutes = new CreateAddressesController()
const getAddressesControllerRoutes = new GetAddressController()

addressRoutes.post('/post', createAddressesControllerRoutes.handle)
addressRoutes.get('/get', getAddressesControllerRoutes.handle)
export {addressRoutes}