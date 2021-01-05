const mongoose=require("mongoose");

//CREATION OF DATABASE STRUCTURE
 //schema -> defines structure of documents
 const employeeSchema=new mongoose.Schema({
   name:{
     type:String,
     required:true,
     unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true, 
       },
   password:{
     type:String,
     required:true
    },
   age:{
       type:Number,
       required:true
   },
   date:
   {
     type:Date,
     default:Date.now
   }
 })
//CREATION OF COLLECTION
//mongoose model -> wrapper to mongoose schema
const Register =new mongoose.model("Register",employeeSchema); //Playlist is the class so its P should be capital
module.exports=Register;