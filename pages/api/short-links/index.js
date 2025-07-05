import dbConnect from "@/db/dbConnect";
import mongoose from "mongoose";
import ShortLink from "@/db/models/ShortLink";

export default async function handler(req, res) {
  await dbConnect();

  switch (req.method) {
    case "GET":
      const shortLinks = await ShortLink.find();
      res.send(shortLinks);
      break;

    case "POST":
      const newShortLink = await ShortLink.create(req.body);
      res.status(201).send(newShortLink);
      break;

    default:
      res.status(404).send();
  }

  // return res.send("안녕 API!");
}
