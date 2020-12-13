const jwt = require('jsonwebtoken');
module.exports = {
    createToken: (id)=>{
    if(id){
      const token = jwt.sign({id} ,process.env.JWT_SECRET,{
        expiresIn :process.env.JWT_EXPIRES_IN
       })
       return token
    }
  } 
}