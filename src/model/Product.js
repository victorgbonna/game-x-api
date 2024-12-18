const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const imageSchema = new Schema(
    {
      url: {
        type: String,
        required:true
      }
    },
    { select: false }
);
const extraDesc = new Schema(
    {
      subtitle: {
        type: String,
        required:true
      },
      desc: {
        type: String,
        required:true
      },
    },
);

const ProductSchema = new Schema(
  {
    email:{
        type: String,
        required:true,
        lowercase: true,
        // unique:true,
    },
    phone:{
        type: String,
        // required:true,
        // unique:true,
    },
    title: {
        type: String,
        required:true
    },
    description:{
        type: String,
        required:true
    },
    username:{
        type: String,
        required:true
    },
    price:{
        type: String,
        required:true
    },
    country:{
        type: String,
        required:true
    },
    isPhysical:{
        type: String
    },
    extraDes: {
        type: [extraDesc],
        default:[]
    },
    imagesObj: {
        type: [imageSchema],
        required:true
      },
    
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
