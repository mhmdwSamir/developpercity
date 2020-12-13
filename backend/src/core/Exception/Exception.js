class Exception {
   
   constructor(message,statusCode,codeException){
    //super(message)
     this.message = message;
     this.statusCode = statusCode;
     this.status = `${statusCode}`;//.startsWith("4") ? " Fail ☹☹ " :"  error ✖✖ ";
    // this.isOperational = true;
     this.codeException = codeException;
   }
  
}

exports.Exception =Exception