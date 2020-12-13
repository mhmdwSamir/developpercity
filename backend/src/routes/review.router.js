const express = require("express");
const router = express.Router();

const reviewController = require("../Controller/reviewController/review.controller")
const handleAsync = require("../helpers/handle_async_Op.handler");
// const {protectRoute ,restricTo} = require("../Controller/AuthProtectRoute")

// const  {validate}  = require("../helpers/validateReq")


/*
 *
 **    All Routes related to interacte with Reviews 
 **
 */

// route to  getAllReviews

console.log(reviewController.getReviews())
router.get("", reviewController.getReviews);



// route to Add an Article || availabe to all only registered users 
router.post("/createReview", handleAsync(reviewController.createReview))






// // route to get specfic article
// router.get("/:id",handleAsync(articleControler.getSpecificArticle))

// // route to delete delete an article  || retrict it to its user || AND ADMIN || CONTRIBUTER_LEAD 

// router.delete("/delete/:id",handleAsync(articleControler.deleteArticleById))

// // route to delete all article   || restrict to only Admin
// router.delete("/delete",handleAsync(articleControler.deleteAll))


// // route to Add an Article || availabe to all only registered users 
// router.post("/add",handleAsync(articleControler.addArticle))


// // route to update a specfic article
// router.put("/update/:ID",handleAsync(articleControler.updateArticle))

module.exports = router