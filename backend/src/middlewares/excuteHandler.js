module.exports = (fn) => {
    return async (req, res, next) => {
        try {
            await fn(req, res, next);
        } catch (exc) {
            console.log(exc);
            if (exc && exc.statusCode) {
                res.status(exc.statusCode)
                    .send(exc);
            }
        }
    }
}