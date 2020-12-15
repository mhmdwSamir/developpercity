const jwt = require('jsonwebtoken');
const http_status_code = require('./../helpers/http_status_code');
const { Exception } = require('./../core/Exception/Exception');

module.exports = async (req, res, next) => {
    try {
        // 1-  Getting token and check of it is there 
        let token = req.headers.authorization;
        if (!token) {
            res.status(http_status_code.Unauthorized)
                .send(
                    new Exception(
                        'Please Login to get access',
                        http_status_code.Unauthorized,
                        'SWkl5254r'
                    )
                );
        }

        if (token && token.startsWith('Bearer')) {
            token = token.split(' ')[1];
        }

        let decoded;
        // 2-  Verifiy token
        try {
            decoded = jwt.verify(token, process.env.JWT_SECRET);
        } catch (exc) {
            if (exc instanceof jwt.TokenExpiredError) {
                res.status(http_status_code.Unauthorized)
                    .send(
                        new Exception(
                            'Token expired',
                            http_status_code.Unauthorized,
                            'TxAPed522'
                        )
                    );
            } else {
                res.status(http_status_code.Unauthorized)
                    .send(
                        new Exception(
                            'invalid token',
                            http_status_code.Unauthorized,
                            'INV@_RFM'
                        )
                    );
            }
        }
        if (!decoded) {
            res.status(http_status_code.Unauthorized)
                .send(
                    new Exception(
                        'invalid token',
                        http_status_code.Unauthorized,
                        'INV@_RFM'
                    )
                );
        }

        // 3-  check if user still exist 
        const existingUser = await User.findById(decoded.id);
        if (!existingUser) {
            res.statusCode(404)
                .send(
                    new Exception(
                        'the User belonging to this token does no longer Exist',
                        http_status_code.NotFound,
                        'SWkl5254r'
                    )
                );
        }
        req.user = existingUser;
        // 5-  then next()   will  continue 
        next()
    } catch (exc) {
        console.log(exc)
        res.status(500).send(' Some thing May Be Wrong  ~!!! ')
    }

}