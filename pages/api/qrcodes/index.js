import dbConnect from "@/db/dbConnect";
import mongoose from "mongoose";
import QRCode from "@/db/models/QRCode";

export default async function handler(req, res) {
  await dbConnect();
  // console.log(mongoose.connection.readyState);
  // const props = Object.keys(QRCode.schema.paths);
  // console.log(props);
  const { id } = req.query;

  switch (req.method) {
    case "GET":
      const qrcodes = await QRCode.find();
      res.send(qrcodes);
      break;

    case "POST":
      const newQrcode = await QRCode.create(req.body);
      res.status(201).send(newQrcode);
      break;

    default:
      res.status(404).send();
  }
}
