import mongoose, { Schema, Document } from "mongoose";

import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';

interface IUser extends Document {
    username: string;
    password: string;
    email: string;
    createToken: ()=>string;
}

const UserSchema = new Schema<IUser>({
    username: {
        type: String,
        required:true,
    },
    password:{
        type:String,
        required:true,
        minlength:[8, "Please give a length greater than 8"]
    },
    email:{
        type:String,
        required:true,
    }

    
})

UserSchema.pre("save", async function () {
  if (!this.isModified("password")) return;

  this.password = await bcrypt.hash(this.password, 10);
});

UserSchema.methods.createToken= async function(){
    const token = await jwt.sign({userId:this._id},'SECRET_KEY',{expiresIn:'7d'})
    return token;
}

export const UserModel = mongoose.model<IUser>('User',UserSchema)