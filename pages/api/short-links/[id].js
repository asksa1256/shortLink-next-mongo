import dbConnect from "@/db/dbConnect";
import ShortLink from "@/db/models/ShortLink";

export default async function handler(req, res) {
  // return res.send(req.query);
  // return res.send(req.body);
  // return res.send(req.cookies);
  await dbConnect();
  const { id } = req.query;

  switch (req.method) {
    case "GET":
      const shortLink = await ShortLink.findById(id);
      res.send(shortLink);
      break;

    case "PATCH":
      const updateShortLink = await ShortLink.findByIdAndUpdate(id, req.body, {
        new: true, // 업데이트 반영 (이 옵션 적용 안하면 업데이트 이전 데이터만 응답)
      });
      res.send(updateShortLink);
      break;

    case "DELETE":
      await ShortLink.findByIdAndDelete(id);
      res.status(204).send();
      break;

    default:
      res.send();
      break;
  }
}
