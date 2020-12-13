const Review = require("../../models/review/review.model");
const { Exception } = require("../../core/Exception/Exception");
const catchAsync = require("../../helpers/handle_async_Op.handler")


module.exports = {
    // getAllReviews
    getReviews: async(req, res, next) => {
        //     try {
        //         // BUILD QUERY

        //         //const filterObj = {...req.query };
        //         let excludedFeilds = ["page", "limit", "sort"];
        //         excludedFeilds.forEach(el => { delete filterObj[el] })
        //         console.log("from filterObj", filterObj)
        //         let queryStr
        //         if (filterObj) {
        //             queryStr = JSON.stringify(filterObj)
        //         }

        //         // {"rate":{"gt":"3"},"catogray":"science"}

        //         // convert  gueryString to real query 
        //         // { rate: { gt: '3' }, catogray: 'science' }
        //         // { rate: { $gt: '3' }, catogray: 'science' }

        //         queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, match => `$${match}`)

        //         // console.log(queryStr)     || Debug
        //         // console.log(JSON.parse(queryStr))

        //         // Excution

        //         let AllReviews = await Review.find();
        //         // console.log("from all review", AllReviews)
        //         console.log("passed from here ")
        //             // SENDING
        //         res.send({
        //             status: "Succes Operation ",
        //         }).end()
        //     } catch (ex) {
        //         // res.status(501).send(ex)
        //         console.log(res)
        //         console.log(ex)
        //     }

    },

    //createReview
    createReview: async(req, res, next) => {

        try {
            let review = new Review(req.body);
            review = await review.save();

            console.log(review.length)
            res.status(201).json({
                status: "suceesful  Create Operation Operation ♥♥!",
                review
            })
        } catch (ex) {
            res.send(ex)
        }

    },

}