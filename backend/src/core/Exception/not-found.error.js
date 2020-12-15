module.exports = class NotFoundError {
    constructor(message, code) {
        this.message = message;
        this.code = code;
        this.statusCode = 401;
    }
}
