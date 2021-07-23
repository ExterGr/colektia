const bodyParser = require("body-parser");
const get_image = require("./get_image");
const create_image = require("./create_image");
const delete_image = require("./delete_image");
const update_image = require("./update_image");

const router = require('express').Router();


router.get('/all', get_image);
router.post('/create', create_image);
router.delete('/delete/:id', delete_image);
router.put('/update/:id', update_image);

module.exports = router;