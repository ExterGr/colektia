const db = require("../../models/index");

module.exports = async (req, res) => {
  const findImages = await db.Image.findAll();

  if (!findImages.length) return res.json([]);

  return res.json(findImages);
};
