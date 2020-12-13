//const { boolean } = require("joi");
const mongoose = require("mongoose");
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
        //  required:true,  Give Error !!
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
    }
});



module.exports = mongoose.model("Article", articleSchema, "Article");