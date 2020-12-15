const bcrypt = require('bcrypt');

const User = require('../models/user.model');
const { Exception } = require('../core/Exception/Exception');
const http_status_code = require('../helpers/http_status_code')
const { createToken } = require('./globalAuth');
const { autoBind } = require('./../helpers');
const BaseController = require('./base-controller');
const { UserDto } = require('./../dtos/user');

// { name , email , password , role }   ||   name & email
const filterObj = (obj, ...allowedFeilds) => {
    const newObj = {};
    Object.keys(obj).forEach(ele => {
        console.log('ele', ele)
        if (allowedFeilds.includes(ele)) newObj[ele] = obj[ele]

    });

    return newObj;

}


const createSendToken = (user, stateCode, res) => {
    const token = createToken(user.id);
    console.log(token)
    const options = {
        httpOnly: true,
        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000)

    };
    res.cookie('Jwt', token, options);
    console.log('cookie created successfully');
    res.status(stateCode).send({
        status: 'success',
        token,
        data: {
            user
        }


    })
}

module.exports = class AuthController extends BaseController {
    constructor() {
        super();
        autoBind(this);
    }

    async getAllUsers(req, res, next) {
        let userList = await User.find();

        res.status(200).send({
            status: 'SuccessFul Operation',
            results: userList.length,
            data: userList.map(UserDto.toDto)
        })

    }

    async signUp(req, res, next) {
        // VALIDATE REQ.BODY
        // get data from user 
        let { name, email, password, role } = req.body;

        if (!name || !email || !password) {
            throw new Exception(
                'Please Provide | name | emmail | password | role',
                http_status_code.BadRequest,
                'jjherYq24'
            );
        }

        // Is there is  a user registered by this email ? 
        let userExist = await User.findOne({ email });
        // If there is
        console.log('userExist', userExist)
        if (userExist) {
            throw new Exception('User Already Registred !!  Login Now', http_status_code.Conflict, 'hyUYH14I')
        }
        let user = await User.create({ name, email, password, role })

        // create new token 
        let token = createToken(user._id);
        user = await user.save()
        res.status(200).send({
            status: 'success Sign up Operation',
            data: {
                token,
                user
            }
        })

    }

    async logIn(req, res, next) {
        let { email, password } = req.body;

        if (!email || !password) {
            throw new Exception('Please Provide Email & password ', http_status_code.BadRequest, 'AQwOOq84')
        }
        let user = await User.findOne({ email }).select('+password');
        console.log(' user ', user)
        //let correctPass = user.checkCorrectPassword(password, user.password)
        console.log(password)
        console.log('user passwordS', user.password)
        const result = await bcrypt.compare(password, user.password)

        console.log('correct pass : result', result)

        if (!user) {
            throw new Exception('Email or password may be incorrect', http_status_code.BadRequest, 'KUJIJ2c26');
        }

        // create  token to user 

        let token = createToken(user._id);
        res.status(200).json({
            status: 'successful login Operation ',
            data: {
                user,
                token
            }
        })
    }

    // ability &&  restric to current user
    // to update his data [ password , name ]  || not all data
    async updateMe(req, res, next) {
        // 1- create error if user  POSTS password Data
        console.log(req.user.password)
        if (!req.user.password) throw new Exception(`
               this route is not for passwords Update . Please use /updateMyPasswoed
             `, 400, 'srtDqdd22')
        // 2- update user Document
        let data = filterObj(req.body, 'name', 'email');
        const upDatedUser = await User.findByIdAndUpdate(req.user.id, data, {
            new: true,
            runValidators: true
        })
        res.status(200).send({
            status: 'Success Update Operation to current User ',
            upDatedUser
        })
    }

    async updateUser() {
        res.status(500).json({
            status: "Error",
            message: " this route is not defined yet  !! "
        })
    }

    async deleteMe(req, res, next) {
        const deletedUser = await User.findByIdAndUpdate(req.user.id, { active: false })
        res.status(200)
            .send({
                status: 'Success delete Operation to current User ',
                Note: ' User Still In Db ',
                deletedUser
            });
    }
}
