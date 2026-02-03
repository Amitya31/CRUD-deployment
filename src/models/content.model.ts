import mongoose, { Schema, Document, Types } from "mongoose";

interface IContent extends Document {
    user: Types.ObjectId;
    content: string;
}

const ContentSchema = new Schema<IContent>({
    user:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    content:{
        type:String,
    }
})

export const ContentModel = mongoose.model('Content', ContentSchema)