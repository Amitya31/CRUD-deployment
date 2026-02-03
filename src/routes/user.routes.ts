import { Router } from "express";
import { UserValidation } from "../validators/validations.js";
import { UserModel } from "../models/user.model.js";

const router = Router();

router.post('/signup', async (req,res)=>{
    const parsed = UserValidation.safeParse(req.body);

    if(!parsed.success){
        return res.status(400).json({
          errors: parsed.error.flatten().fieldErrors,
        })
    }

    const {username, email, password} = parsed.data;

    const user = await UserModel.create({
        username,
        email,
        password
    })

    const token = user.createToken()
})