const db = require("../../models/index");

module.exports = async (req, res) => {
  if (!req.params.id) return res.json({ error: "id is needed" });

  const findImage = await db.Image.findByPk(req.params.id);
  if (!findImage) return res.json({ error: "No image found" });

  await findImage.destroy();

  return res.send(`Success deleting image id: ${req.params.id}`);
};
