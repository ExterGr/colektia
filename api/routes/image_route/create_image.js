const db = require("../../models/index");

module.exports = async (req, res) => {
  if (!req.body.url_direction)
    return res.json({ error: "url_direction is needed" });

  const addImage = await db.Image.create({
    description: req.body.description,
    url_direction: req.body.url_direction,
  });

  return res.send(addImage);
};
