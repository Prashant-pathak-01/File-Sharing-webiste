import FileModule from './../schema/fileSchema.js'

export const fileAdder = async (req, res) => {
    try {
        const data = new FileModule(req.body);
        await data.save();
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json("Failed data updation !");
    }
}

export const getFile = async (req, res) => {
    try {
        const data = await FileModule.findOne({ FileId: req.body.FileId });
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json("Failed file fetching !");
    }
}

export const getHistory = async(req,res)=>{
    try{
        const data = await FileModule.find({UserName:req.body.UserName});
        return res.status(200).json(data);
    }catch(error){
        return res.status(500).json("Failed fetching history !");
    }
}

export const removeFile = async(req,res)=>{
    try{
        const data = await FileModule.deleteOne({FileId:req.body.FileId});
        return res.status(200).json("File deleted successfully !");
    }catch(error){
        return res.status(500).json("Failed removing file !");
    }
}

export const getDownloadFileData = async(req,res)=>{
    try{
        const data = await FileModule.findOne({FileId:req.body.Id});
        if(data){
            return res.status(200).json(data);
        }
        return res.status(201).json("File not exists !");
    }catch(error){
        return res.status(500).json("Failed fetching download file !");
    }
}

export const updatePassword = async(req,res)=>{
    try{
        await FileModule.findOneAndUpdate({FileId:req.body.FileId},{Password:req.body.Password});
        return res.status(200).json("Updated successfully");
    }catch(error){
        return res.status(500).json("Failed file password updation !");
    }
}