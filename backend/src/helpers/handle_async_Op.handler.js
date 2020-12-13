const handleException = require("./exception.handler");

module.exports = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
   
    } catch (ex) {
      handleException(ex, res);
    }
  };
};
