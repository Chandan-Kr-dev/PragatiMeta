
import prisma from "../db/prismaClient.js";
import bcrypt from 'bcryptjs'

const Signup=async(req,res)=>{
    try {
        const {Name ,Email , Password,userRole}=req.body
        console.log(req.body)
        if(Name==null || Email==null || Password ==null ||userRole==null)
            return res.status(401).send("Missing required fields")
    const user=await prisma.user.findUnique({where:{Email:Email}})
    if(user){
        res.status(401).send("User already exists")
    }
    else{
        const hash=await bcrypt.hash(Password,10)
        const usercreated=await prisma.user.create({data:{Name ,Email ,Password:hash , userRole }});
        res.status(201).send({user:usercreated,message:"User created Successfully"});
    }
    } catch (error) {
        console.error(error)
        res.send(error)
    }
    
}

const Login=async(req,res)=>{
    try {
        const {Email , userRole ,Password}=req.body;
        console.log(req.body)
        if(Name==null || Email==null || Password ==null ||userRole==null)
            return res.status(401).send("Missing required fields")
        const user=await prisma.user.findUnique({where:{Email}})
        if(user){
            if(user.userRole==userRole){
                const match=bcrypt.compare(Password,user.Password)
                if(match){
                    res.status(200).send("LoggedIn")
                }
                else{
                    res.status(400).send("Password Incorrect")
                }
            }
            else{
                res.status(404).send(`You are not authorised for  ${userRole} Role`)
            }
        }
        else{
            res.status(404).send("Invalid Credentials ")
        }
    } catch (error) {
        console.error(error)
        res.send(error)
    }

}

export default {Signup ,Login}