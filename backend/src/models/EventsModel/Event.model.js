
const mongoose = require("mongoose");
const eventSchema = mongoose.Schema({
    eventName:{
      type:String,
      trim :true,
      required:true,
     },
     catog:{
      type:String,
      required:true,
      enum:["Programming","DB","AI","Software","hardWare"]
      },
    contributers:{
        type:[String],
        required:true,
     },
     img:{
      data: Buffer, 
      contentType: String ,
      
     },
     isPublished:{
        type: Boolean,
        default:false
     },
     date:{
       type:Date,
       default:Date.now() // + duration
     }, 
     location: {
          type: [Number], // 'location.type' must be 'Point'
          required: true
       
   
      },
      leaders:{
        type:[String],
        required:true,
       },
      address:String,
      description:String,
      day:String,
    
   
});



module.exports = mongoose.model("Event",eventSchema);

