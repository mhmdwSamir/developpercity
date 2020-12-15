const http_status_code = require('../helpers/http_status_code')

module.exports = (...roles) => (req, res, next) => {
    if (req.user.role == 'admin' || req.user.role == 'modirator') {
        return next()
    }

    if (!roles.includes(req.user.role)) {
        return res.status(http_status_code.Forbidden)
            .send(
                new Exception(
                    'No Role Provided',
                    http_status_code.Forbidden,
                    'MALIcio253'
                )
            );
    }
}
