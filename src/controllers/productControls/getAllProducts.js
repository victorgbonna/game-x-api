const Product = require("../../model/Product");


module.exports = async function (req, res, next) {
  try {
    const {cat}= req.query
    const condition={
      ...(cat?{category:cat}:{})
    }
    const product= await Product.find(condition)

    return res
      .status(200)
      .json({ status: "success", message:"Product gotten", product} );
  } catch (error) {
    next(error);
  }
};
