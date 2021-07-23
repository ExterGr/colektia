const express = require("express");
const router = express.Router();
const image_route = require("./image_route/image_route");
const cors = require('cors');

router.use(cors());

router.use("/images", image_route);

module.exports = router;
