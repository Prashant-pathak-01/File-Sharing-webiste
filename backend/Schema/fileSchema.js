import mongoose from "mongoose";
const file = mongoose.Schema({
    UserName:{
        type:String
    },Name:{
        type:String
    },Password:{
        type:String
    },Size:{
        type:String
    },Url:{
        type:String
    },FileId:{
        type:String
    },Type:{
        type:String
    }
},{
    timestamps:true
});
const fileSchema =  mongoose.model('file',file);
export default fileSchema;