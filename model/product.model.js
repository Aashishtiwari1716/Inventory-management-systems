const mongoose = require("mongoose");

const {ObjectId}=mongoose.Schema.Types;

const Schema = mongoose.Schema;

const productSchema=new Schema({
  name:{
    type:String,
    required:[true,"please provide a name for this product"],
    trim:true,
    lowercase:true,
    unique:[true,"name must be unique"],
    minLength:[3,"name must be at least 3 character"],
    maxLength:[20]
  },
  description:{
    type:String,
    required:true,
  },
  // price:{
  //   type:Number,
  //   required:true,
  //   min:[0,"price can't be negative"],
  // },
  unit:{
    type:String,
    required:true,
    enum:{
      values:["kg","litre","pcs","bag"],
      message:"unit value can't be {value}.must be kg/litre/pcs/bag"
    }
  },
  
  createdAt:{
    type:Date,
    default:Date.now,
  },
  updatedAt:{
    type:Date,
    default:Date.now,
  },
  supplier:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"supplier"
  },
  category:[{
    name:{
    type:String,
    // required:true,
  },
  _id:mongoose.Schema.Types.ObjectId,
}],
brand:{
  name:{
    type:String,
    required:true
  },
  id:{
    type:ObjectId,
    ref:'Brand',
    required:true
  }
}

});

const Product=mongoose.model('product',productSchema)

module.exports=Product;