const express = require("express");
const router = express.Router();
const authController = require("../Controller/globalAuth")
const articleControler = require("../Controller/articleControler/article.controller")
const handleAsync = require("../helpers/handle_async_Op.handler");

// console.log(authController.restricTo('admin'))
// const  {validate}  = require("../helpers/validateReq")


/*
 *
 **
 **    All Routes related to interacte with Articles || users || contributors ||Admins
 **
 **
 **
 */

// route to get All Articles
//  authController.restricTo("admin")
//, authController.protect
router.get("", handleAsync(articleControler.getAllArticles))

// route to get specfic article
router.get("/:id", handleAsync(articleControler.getSpecificArticle))

// route to delete delete an article  || retrict it to its user || AND ADMIN || CONTRIBUTER_LEAD 

router
    .route("/delete/:id")
    .delete(articleControler.deleteArticleById)

// route to delete all article   || restrict to only Admin
router.delete("/delete", handleAsync(articleControler.deleteAll))


// route to Add an Article || availabe to all only registered users 
router.post("/add", handleAsync(articleControler.addArticle))


// route to update a specfic article
router.put("/update/:ID", handleAsync(articleControler.updateArticle))

module.exports = router