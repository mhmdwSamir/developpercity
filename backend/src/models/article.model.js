//const { boolean } = require("joi");
const mongoose = require("mongoose");
const User = require("./user.model")
const articleSchema = mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true,
    },
    catogray: {
        type: String,
        required: true,
        enum: ["Programming", "DB", "AI", "Software", "hardWare"]
    },
    writer: {
        type: String,
        trim: true,
        required: true,
    },
    img: {
      
        data: Buffer,
        contentType: String,

    },
    isPublished: {
        type: Boolean,
        default: false
    },
    date: {
        type: ISODate,
        default: Date.now()
    },
    article_owner:{}
        // who is the owner?
      
        // {  ref: 'User' }
    //    ref:"UserSchema" 
    
    //  },
    //     toJSON: { virtuals: true },
    //     toObject: { virtuals: true }
  
});



module.exports = mongoose.model("Article", articleSchema, "Article");