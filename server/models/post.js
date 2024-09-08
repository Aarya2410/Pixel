import mongoose from "mongoose";

const post = new mongoose.schema({
    name:{type: string,required:true},
    prompt:{type: string,required:true},
    name:{type: string,required:true},
})

const PostSchema= mongoose.model('Post',post);

export default PostSchema;