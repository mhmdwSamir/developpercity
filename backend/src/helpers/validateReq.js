const Joi = require('joi');

  
module.exports= {
  validate:(Body) =>{
    const schema = {
        title: Joi.string().alphanum().min(3).max(30).required(),
        catogray: Joi.string().required(),
        writer: Joi.string().required().min(3).max(30),
        // Confuse Me ♥♥♥♥ 
        //img: JoiImage.image().minDimensions(100, 50),
    }
     return Joi.validate(Body,schema)  
  }
}



