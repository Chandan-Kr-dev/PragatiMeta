import express from 'express'
import cors from 'cors'
import userRouter from './Routes/userRoutes.js'

const app=express()
app.use(express.json())
app.use(cors)

app.use('/',(req,res)=>{
    res.send("App is working !!")
})

app.use('/auth',userRouter)

app.listen(8080,
    console.log("Server is listing at port 8080")
)