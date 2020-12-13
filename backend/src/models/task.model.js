const mongoose = require("mongoose");

const Task = mongoose.model("Task",{
 
 title : {
    type:String,
    required:true,
    trim:true, 
 },
 status:{
     type:Boolean,
     default:false
 },
 owner:{
    // who is the owner?
    // what its type?  || this relation is => virtual
    type:mongoose.Schema.types.ObjectId, // لاوم احدد النوع بتاعه عشان متبقاش الدنيا عايمة
    required:true,
    ref:"user" // بيشاور علي ال user 
 }


});

module.exports = Task
