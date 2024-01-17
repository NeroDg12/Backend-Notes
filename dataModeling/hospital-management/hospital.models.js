import mongoose, { Schema } from "mongoose";

const hospitalSchema = new Schema({

  name:{
    type: String,
    required: true,
  },
  addressLine1:{
    type: String,
    required: true,
  },
  city:{
    type: String,
    required: true,
  },
  pincode:{
    type: String, //better to put pincode on String
    required: true,
  },
  specializedIn:[{
    type: String,
    required: true,
  }],

},{timestamps:true})


export const Hospital = mongoose.model("Hospital",hospitalSchema)