import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
  {

  username:{
    type:String,
    required:true,
    unique:true,
    lowercase:true
  },
  email:{
    type:String,
    required:true,
    unique:true,
    lowercase:true
  },
  password:{
    type:String,
    password:[true,"Password is required"]
  }

 },{timestamps:true}   //for knowing the created at and updated at
)

export const User = mongoose.model("User",userSchema)