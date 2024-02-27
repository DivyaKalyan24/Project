import express from 'express'

import { postLoginController, postRegisterController, postGetUser, postEmailAvailability, logoutController } from '../controllers/Auth.js'
import { isAuthenticated } from '../middlewares/Auth.js'


const router = express.Router()

router.post('/api/v1/login', postLoginController)

router.post('/api/v1/register', postRegisterController)

router.post('/api/v1/get-user', isAuthenticated, postGetUser)

router.post('/api/v1/check-email-availability', postEmailAvailability)

router.get('/api/v1/logout', logoutController)

export default router