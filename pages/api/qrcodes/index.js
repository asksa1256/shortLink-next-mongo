import dbConnect from "@/db/dbConnect";
import mongoose from "mongoose";
import QRCode from "@/db/models/QRCode";

export default async function handler(req, res) {
  await dbConnect();
  // console.log(mongoose.connection.readyState);
  const props = Object.keys(QRCode.schema.paths);
  console.log(props);

  switch (req.method) {
    case "GET":
      res.status(200).send([
        {
          id: "abc",
          title: "위키피디아 Next.js",
          url: "https://en.wikipedia.org/wiki/Next.js",
        },
        {
          id: "def",
          title: "코드잇 자유게시판",
          url: "https://codeit.kr/community/general",
        },
        {
          id: "ghi",
          title: "코드잇 질문답변",
          url: "https://www.codeit.kr/community/questions",
        },
      ]);
      break;
    case "POST":
      res.status(201).send({
        title: "위키피디아 Next.js",
        url: "https://en.wikipedia.org/wiki/Next.js",
      });
      break;
    default:
      res.status(404).send();
  }
}
