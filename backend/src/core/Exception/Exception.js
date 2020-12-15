class Exception {

   constructor(message, statusCode, codeException) {
      // super(message)
      this.message = message;
      this.statusCode = statusCode;
      // .startsWith("4") ? " Fail ☹☹ " :"  error ✖✖ ";
      this.status = `${statusCode}`;
      // this.isOperational = true;
      this.codeException = codeException;
   }

}

exports.Exception = Exception;
