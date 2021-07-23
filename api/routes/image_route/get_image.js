const db = require("../../models/index");

module.exports = async (req, res) => {
  const findImages = await db.Image.findAll();

  if (!findImages.length) return res.json({ empty: "No images found" });

  return res.json(findImages);
};
