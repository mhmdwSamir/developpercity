const { NotFoundError } = require('./../core/Exception');

module.exports = class BaseController {

    throwNotFoundException(message, code) {
        throw new NotFoundError(message, code)
    }
}