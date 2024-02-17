import express from "express";
import {fileAdder, getFile,getHistory,removeFile,getDownloadFileData,updatePassword} from './FileHandler/file.js'
import { sendMail } from "./MailSender/index.js";
import { addUser, getUser, updateUser } from "./UserHandler/file.js";

const route  = express.Router();

route.post('/addFile',fileAdder);
route.post('/getFile',getFile);
route.post('/getHistroy',getHistory);
route.post('/removeFile',removeFile);
route.post('/getDownloadFile',getDownloadFileData);
route.post('/updatePassword',updatePassword);
route.post('/sendMail',sendMail);
route.post('/addUser',addUser);
route.post('/getUser',getUser);
route.post('/updateUser',updateUser);

export default route;