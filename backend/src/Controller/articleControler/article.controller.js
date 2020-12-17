const Article = require("../../models/article.model");
const { Exception } = require("../../core/Exception/Exception");
const http_status_code = require("../../helpers/http_status_code");
const { compareSync } = require("bcrypt");
const Mongoose = require('mongoose');
const User = require('../../models/user.model')
module.exports = {
    // getAllArticles
    getAllArticles: async (req, res, next) => {
        try {
            // BUILD QUERY
            let queryObj = { ...req.query };
            // let excludedFeilds = ["page", "limit", "sort"];
            // excludedFeilds.forEach(ele => {
            //     delete queryObj[ele]
            // })
            console.log("queryObj", queryObj)
            // Advanced  Filtering

            // let queryStr = JSON.stringify(queryObj)
            // queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, match => `$${match}`)

            // console.log("| SENDEDqUERY |queryObj after stri && replace", queryStr);


            // //  Sorting 
            // let query;
            // if (req.query.sort) {
            //     console.log("Sor By =>", req.query.sort)
            //     query = query.sort(req.query.sort)
            // }
            //  query = await query;
            // query = Article.find(JSON.parse(queryStr))
            query = Article.find()



            articles = await query

            // // handle some Cases  ☹☹!
            //if (articles.length == 0) throw new Exception("It Seems That There is no DATA", http_status_code.NotFound, "UIYTjn25U");

            //SENDING RES
            res.status(http_status_code.Ok).send({
                status: "Succes Operation ",
                resluts: articles.length,
                data: articles,

            })
        } catch (ex) {
            console.log(ex)
            res.status(501).send({

                status: "fail",
                message: ex.message
            })
        }
    },

    //getSpecificArticle
    getSpecificArticle: async (req, res) => {
        try {
            let id = req.params.id;

            console.log(" reqParams", req.params.id);
            if (!id) throw new Exception("!♥Dont Play PLEASE ♥! No Given Id to get the article !♥♥! ", http_status_code.BadRequest, "UIYTjn25U");

            // Dont Work !!
            console.log(id)
            // let article = await Article.findById(id);

            // if (!article) throw new Exception("!♥Dont Play PLEASE ♥! INNCORECT id ", http_status_code.BadRequest, "OKLEjn25U");

            let article = await Article.findById(id)
            .populate('guides')
            .exec();
            console.log("after populate ", article)
            // console.log("reaer",article)
            res.status(http_status_code.Ok).send({
                statse: "Succesful Operation",
                data: article,
            })

        } catch (ex) {
            console.log(ex)
            res.status(404).send({
                statse: "Failed Operation",
                message: ex,
            })
        }
    },

    //deleteArticleById
    deleteArticleById: async (req, res) => {
        try {
            let id = req.params.id // id ,
            // Conflict happens here || with delete all route 
            if (!id) throw new Exception("♥♥ No Given id to delete with ♥♥", http_status_code.BadRequest, "JkkJKG14ll")
            Article.findByIdAndDelete(id, (err, article) => {
                if (err) throw new Exception("♥♥ Problem with Deleting the Article♥♥", http_status_code.BadRequest, "JJHJKG14ll")
                res.send({
                    success: 'article deleted successfully ♥♥',
                    status: 201,
                    deletedArticle: article,
                })
            })

        } catch (ex) {
            console.log(ex)
            res.send(ex)
        }
    },

    //delete All Articles
    deleteAll: async (req, res, next) => {
        try {
            const result = await Article.deleteMany();
            res.status(http_status_code.Ok).send({
                status: "Delete all Operation succeded ♥♥!",
                dataDeleted: result,
            });
        } catch (ex) {
            res.send(ex)
        }


    },
    // add 
    addArticle: async (req, res, next) => {

        // should  validate req.body  ||  Confuse Me ♥♥♥♥ 
        // const{error}  = validate(req.body);
        // console.log("error" , error)

        // if(error) throw new Exception(`♥♥Error: ${error.details[0]} ♥♥`,http_status_code.BadRequest,"JkkJKG14ll" );

        let { title, catogray, writer, img } = req.body;
        //  console.log({...req.body})
        // creatorUserId
        let newArticle = new Article({
            ...req.body,
            guides: [Mongoose.Types.ObjectId(req.user.id)]
        });
        newArticle = await newArticle.save();

        res.status(http_status_code.Created).send({
            status: "Success Add Article Operation ♥♥!",
            data: newArticle,
        })

    },
    //update
    updateArticle: async (req, res, next) => {

        // console.log("req.params._id",req.params.ID)
        let article = await Article.findOne({ _id: req.params.ID });
        // Cannot See its result 
        if (!article) throw new Exception("No Article Founde to Be updated  ", http_status_code.BadRequest, "xXeUff445")
        console.log(req.body)
        article = await Article.findByIdAndUpdate(req.params.ID, req.body, {
            new: true,
            runValidators: true
        })
        // cannot Control Error Message 😋 ☹☹ ♥♥!
        res.status(200).send({
            status: "Success",
            data: {
                article: article,
            }
        })
    }
}