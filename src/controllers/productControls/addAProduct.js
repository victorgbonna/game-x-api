const Product = require("../../model/Product");
const sendEmailToUser = require("../../utils/sendEmailToUser");


module.exports = async function (req, res, next) {
  try {
    const {email, title}= req.body

    const productExist= await Product.findOne({email, title})
    if(productExist){
        return res.status(400).json({error:{message:"You already have a product with the same title"}})
    }
    const product = new Product({...req.body, ...(refDetails?refDetails:{})});
    
    await product.save();
    sendEmailToUser({
        tempPath: "public/views/informAdminAboutProduct.html",
        replacements: {
         ...req.body
        },
        mailTo: ['victorgbonna@gmail.com'],
        subject: "We have an product to take care of",
    });
    return res
      .status(200)
      .json({ status: "success", message:"Product gotten", product} );
  } catch (error) {
    next(error);
  }
};
