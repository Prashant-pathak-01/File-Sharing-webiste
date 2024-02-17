import axios from 'axios';
const URL = "http://localhost:8000";
export const FileData = async(data)=>{
    try{
        let res = await axios.post(`${URL}/addFile`,data);
        return res.data;
    }catch(error){
        console.log("Could not add file !");
    }
}

export const getFile = async(data)=>{
    try{
        let res = await axios.post(`${URL}/getFile`,data);
        return res.data;
    }catch{
        console.log("Could not fetch file !");
    }
}

export const getHistory = async(data)=>{
    try{
        let res = await axios.post(`${URL}/getHistroy`,data);
        return res.data;
    }catch(error){
        console.log("Could not fetch all files !");
    }
}

export const deleteFile = async(data)=>{
    try{
        let res = await axios.post(`${URL}/removeFile`,data);
        return res.data;
    }catch(error){
        console.log("Could not fetch all files !");
    }
}

export const getDownloadFileData = async(data)=>{
    try{
        let res = await axios.post(`${URL}/getDownloadFile`,data);
        return res.data;
    }catch(error){
        console.log("Could not fetch download file");
    }
}

export const updatePassword=async(data)=>{
    try{
        let res =await axios.post(`${URL}/updatePassword`,data);
        return res.data;
    }catch(error){
        console.log("Could not update file password");
    }
}

export const sendMail=async(data)=>{
    try{
        let res =await axios.post(`${URL}/sendMail`,data);
        return res.data;
    }catch(error){
        console.log("Could not send mail !");
    }
}

export const addUser=async(data)=>{
    try{
        let res = await axios.post(`${URL}/addUser`,data);
        return res.data;
    }catch(error){
        console.log(error.message);
    }
}

export const getUser=async(data)=>{
    try{
        let res = await axios.post(`${URL}/getUser`,data);
        return res.data;
    }catch(error){
        console.log(error);
    }
}

export const updateUser=async(data)=>{
    try{
        let res = await axios.post(`${URL}/updateUser`,data);
        return res.data;
    }catch(error){
        console.log(error);
    }
}