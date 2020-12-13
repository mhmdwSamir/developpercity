const mongoose = require("mongoose");
const reviewSchema = mongoose.Schema({
    rating: {
        type: Number,
        mim: 1,
        max: 5,
    },
    prizes: {
        type: [String],
        required: true,
    },
    Active_members: {
        type: [String],
        required: true,
    },
    date: {
        type: String,
        default: Date.now()
    },
    // event: {
    //     type: mongoose.Schema.ObjectId,
    //     ref: "Event",
    //     required: [true, " Review must blong to Event "]
    // },
    // user: {
    //     type: mongoose.Schema.ObjectId,
    //     ref: "User",
    //     required: [true, "Review must belong to a user "]
    // }
});

reviewSchema.pre(/^find/, function(next) {
    this.populate({
        path: "event",
        select: "all "

    }).populate({
        path: "user",
    })
})

module.exports = mongoose.model("Review", reviewSchema, "Review");