const addAProduct = require("../../controllers/productControls/addAProduct");
const getAllProducts = require("../../controllers/productControls/getAllProducts");

const router = require("express").Router();


router.get("/all", getAllProducts);
router.post("/add", addAProduct);

module.exports = router;