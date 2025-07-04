export default function handler(req, res) {
  const { id } = req.query;

  switch (req.method) {
    case "GET":
      res.status(200).send(id);
      break;
    case "PATCH":
      res.status(200).send({ ...req.body, id });
      break;
    case "DELETE":
      res.status(204).send();
      break;
    default:
      res.status(404).send();
      break;
  }
}
