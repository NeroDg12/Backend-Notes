import mongoose, { Schema } from "mongoose";

const patientSchema = new Schema({
  name:{
    type: String,
    required: true,
  },
  diagnosedWith:{
    type: String,
    required: true,
  },
  address:{
    type: String,
    required: true,
  },
  age:{
    type: Number,
    required: true,
  },
  bloodGroup:{
      type: String,
      enum:["AB+", "B+","O+","AB-", "B-","O-"],
      required: true,
  },
  gender:{
    type: String,
    enum:["male", "female","others"],
    required: true,
},
  admittedIn:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Hospital"
  }




},{timestamps:true})


export const Patient = mongoose.model("Patient",patientSchema)