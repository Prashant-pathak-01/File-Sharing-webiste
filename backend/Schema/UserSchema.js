import mongoose from "mongoose";

const userSchema= mongoose.Schema({
    UserName:{
        type:String
    },
    FileCount:{
        type:Number
    },
    Premium:{
        type:Boolean
    },
    FileSize:{
        type:Number
    }
});

const schema = mongoose.model('user',userSchema);
export default schema;