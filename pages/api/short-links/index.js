import dbConnect from "@/db/dbConnect";
import mongoose from "mongoose";

export default async function handler(req, res) {
  await dbConnect();
  console.log(mongoose.connection.readyState);
  return res.send("안녕 API!");
}
