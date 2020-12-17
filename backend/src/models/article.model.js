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
        type: Date,
        default: Date.now()
    },
    owners:Array,
    // guide:{

    //     // ref: 'User' 
    // },
        // who is the owner?
      
        // 
    //    ref:"UserSchema" 
    
    // //  },
    //     toJSON: { virtuals: true },
    //     toObject: { virtuals: true }
  
});

articleSchema.pre('save', async function(next) {

   const articlesOwnersPromises = this.owners.map(async (id)=>
      await User.findById(id)); 
    this.owners = await Promise.all(articlesOwnersPromises);
   
    next()

});


module.exports = mongoose.model("Article", articleSchema, "Article");