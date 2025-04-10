import express from 'express'
import UserControllers from '../Controllers/UserControllers.js'
const userRouter=express.Router()

userRouter.post('/signup',UserControllers.Signup)
userRouter.post('/login',UserControllers.Login);

export default userRouter