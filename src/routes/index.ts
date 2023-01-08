import { Router } from 'express'

import { addressRoutes } from './address.routes'
import { userRoutes } from './user.routes'

const routes = Router()

routes.use("/users", userRoutes)
routes.use("/address", addressRoutes)
export { routes }