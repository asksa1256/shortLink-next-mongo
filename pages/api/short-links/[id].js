export default function handler(req, res) {
  // return res.send(req.query);
  // return res.send(req.body);
  // return res.send(req.cookies);
  switch (req.method) {
    case "GET":
      res.send("ShortLink 조회");
      break;
    case "PATCH":
      res.send("ShortLink 수정");
      break;
    default:
      res.send();
      break;
  }
}
