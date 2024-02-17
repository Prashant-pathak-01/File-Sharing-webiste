import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const MONGODB_USERNAME = process.env.MONGODB_USERNAME;
const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD;
const URL = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@filesharing.zka0izu.mongodb.net/filesharing?retryWrites=true&w=majority`;
async function run() {
  try {
    await mongoose.connect(URL);
    console.log("You successfully connected to MongoDB!");
  } catch (error) {
    console.log(error)
  }
}

export default run;
