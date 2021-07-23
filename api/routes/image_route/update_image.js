const db = require("../../models/index");

module.exports = async (req, res) => {
  if (!req.params.id) return res.json({ error: "id is needed" });

  const findImage = await db.Image.findByPk(req.params.id);

  if (!findImage) return res.json({ error: "No image found" });

  if (req.body.url_direction) {
    await findImage.update({ url_direction: req.body.url_direction });
  }

  if (req.body.description) {
    await findImage.update({ description: req.body.description });
  }

  return res.json(`Success updating image id: ${req.params.id}`);
};
