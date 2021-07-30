require('dotenv').config({ path: "./config.env" });
const jwt = require('jsonwebtoken');
const { Exception } = require("../core/Exception/Exception");
const http_status_code = require("../helpers/http_status_code")
const User = require("../models/user.model");
const { sendEmail } = require("../helpers/mail")

// console.log(process.env)
module.exports = {
    createToken: (id) => {
        if (id) {
            console.log("User Id to create its Token ", id)
            const token = jwt.sign({ currentUserId: id }, process.env.JWT_SECRET, {
                expiresIn: process.env.JWT_EXPIRES_IN
            });
            // when verify function throws error.
            // jwt.verify('sadsfdsdfs', 'mohammedsamir')
            // if token is an invalid token example: 'sdsfdsf'
            // if the token passed is not from my application
            // if token is an valid token,  your application created it and expiration date is over.
            // jjsadjhiuwehriwu34iu24hushdsaiudhaisdhwqiueh23erhuhewiued
            return token
        }

        throw new Error(`You can not create token without passing a valid id you passed ${id}`);
    },
    protect: async function (req, res, next) {
        try {
            // 1-  Getting token and check of it is there 
            let token;
            if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
                token = req.headers.authorization.split(" ")[1];
            }
            if (!token) {
                console.log("there is no token")
                throw new Exception("Please Login to get access", http_status_code.Unauthorized, "SWkl5254r")
            }
            // 2-  Verifiy token
            let decoded = jwt.verify(token, process.env.JWT_SECRET);

            if (!decoded) next(new Exception("Please Login to get access", http_status_code.Unauthorized, "SWkl5254r"))
            // 3-  check if user still exist 
            const freshUser = await User.findById(decoded.id);
            if (!freshUser) {
                next(new Exception("the User belonging to this token does no longer Exist", http_status_code.Unauthorized, "SWkl5254r"))
            }
            // 4 - check if user changed password after the token was issued
            // if (freshUser.changedPasswordAfter(decoded.iat)) {
            //     return next(new Exception("User has recently changed password !", http_status_code.Unauthorized, "OLKde1154"))
            // }
            // append current user to req
            req.user = freshUser;

            next()
            // 5-  then next()   will  continue 
        } catch (ex) {
            console.log({ ex })
            res.status(400).send(" Some thing May Be Wrong  ~!!! ")
        }

    },
    // Authorization
    restricTo: function (...roles) {
        // remeber that we have [ user itself in ( req ) ]
        return (req, res, next) => {

            if (!roles.includes(req.user.role)) {

                return next(new Exception("No Role Provided", http_status_code.Forbidden, "MALIcio253"))

            }
            // console.log(req.user.role)
            if (req.user.role == 'admin' || req.user.role == 'modirator') {

                return next()
            }
            //next()
        }

    },
    forgetPassword: async function (req, res, next) {
        let user;
        try {
            // - get user based on EMAIL
            user = await User.findOne({ email: req.body.email });
            if (!user) throw new Exception("No Email Founded ", http_status_code.BadRequest, "LKkjk457Y");
            // - Generate random set token 
            const resetToken = user.createPasswordResetToken();

            user = await user.save({ validateBeforeSave: false });
            //console.log(user)
            //  // - Send it to user Email 

            const resetUrl = `${req.protocol}://${req.get("host")}/api/auth/resetPassword/${resetToken}`
            // console.log(resetUrl)
            //   console.log("before")
            const message = ` Forget Your password ?! submit a PATCH with your new password to ${resetUrl}`;
            await sendEmail({
                email: user.email,
                subject: "Your password resetToken (valid for 10 min)",
                message
            })


            res.status(200).send({
                status: "Success",
                message: "Token Sent To Your Email"
            })

        } catch (ex) {
            console.log(ex)
            // user.passwordResetToken = undefined;
            // user.passwordExpiresAt = undefined;
            // // console.log(user)
            // user = await user.save({ validateBeforeSave: false });
            // res.send(ex)
            // return next(new Exception("There was An error Happend", 409, "SEgfrwg45"))

        }
    },
    resetPassword: async function (req, res, next) {

        // 1-  get user based on the token 
        // const hasedToken = crypto.createHash("sha256")
        //     .update(req.params.token)
        //     .digest('hex');

        // let user = await User.findOne({
        //     passwordResetToken: hasedToken,
        //     passwordExpiresAt: { $gt: Date.now() }
        // })
        // 2- if token has not expired , and there is user , set the new password
        // if (!user) {
        //     throw new Exception(" Token Is Invalid or Has Expierd  ", 400, "LJKLJG55kk")
        // }
        // user.password = req.body.password;
        // user.passwordResetToken = undefined;
        // user.passwordExpiresAt = undefined;
        // await user.save()

        // const token = createToken(user._id);
        // res.status(200).json({
        //     status: "Succes",
        //     token
        // })
        // res.send(user)
        // 3- update changedPasswordAt  prop for the user 

        // 4-  log the user in , send JWT

    },

}