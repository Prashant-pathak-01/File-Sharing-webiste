import UserSchema from '../Schema/UserSchema.js';

export const addUser = async(req,res)=>{
    try{
        const exist = await UserSchema.findOne({UserName:req.body.UserName});
        if(exist){
            return res.status(200).json(exist);
        }
        const user = new UserSchema(req.body);
        await user.save();
        return res.status(200).json(user);
    }catch(error){
        return res.status(500).json(error);
    }
}

export const getUser = async(req,res)=>{
    try{
        const data = await UserSchema.findOne({UserName:req.body.UserName});
        return res.status(200).json(data);
    }catch(error){
        return res.status(500).json(error);
    }
}

export const updateUser = async(req,res)=>{
    try{
        const data = await UserSchema.updateOne({UserName:req.body.UserName},{FileCount:req.body.FileCount});
        return res.status(200).json(data);
    }catch(error){
        return res.status(500).json(error);
    }
}