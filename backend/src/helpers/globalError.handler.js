const { Exception }= require("../core/Exception/Exception")

module.exports = (req,res,next)=>{
    next(new Exception(`Can\'t Find |  ${req.originalUrl}  | on Server right now || ☹☹! `) , 404)
}
  
  
 