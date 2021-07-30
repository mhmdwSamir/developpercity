const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/user.model');
const { Exception } = require('../core/Exception/Exception');
const http_status_code = require('../helpers/http_status_code');
const { createToken } = require('./globalAuth');
const { Unauthorized } = require('../helpers/http_status_code');

const SALT_ROUNDS = 10;

const filterObj = (obj, ...allowedFeilds) => {
  const newObj = {};
  Object.keys(obj).forEach((ele) => {
    if (allowedFeilds.includes(ele)) {
      newObj[ele] = obj[ele];
    }
  });
  return newObj;
};

const createSendToken = (user, stateCode, res) => {
  const token = createToken(user.id);

  const options = {
    httpOnly: true,
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
  };
  res.cookie('Jwt', token, options);
  console.log('cookie created successfully');
  res.status(stateCode).send({
    status: 'success',
    token,
    data: {
      user,
    },
  });
};

module.exports = {
  getAllUsers: async (req, res, next) => {
    try {
      let userList = await User.find();

      res.status(200).send({
        status: 'SuccessFul Operation',
        results: userList.length,
        data: userList,
      });
    } catch (ex) {
      console.error(ex);
      res.status(404).send({ ex });
    }
  },

  signUp: async (req, res, next) => {
    try {
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
      if (userExist) {
        throw new Exception(
          'User Already Registred !!  Login Now',
          http_status_code.Conflict,
          'hyUYH14I'
        );
      }

      const hashPassword = await bcrypt.hash(password, SALT_ROUNDS);
      let user = await User.create({
        name,
        email,
        password: hashPassword,
        role,
      });
      // create new token
      let token = createToken(user._id);
      user = await user.save();
      res.status(200).send({
        status: 'Success sign up operation',
        data: { token },
      });
    } catch (ex) {
      console.error(ex);
      res.status(404).send({ ex });
    }
  },

  logIn: async (req, res) => {
    try {
      let { email, password } = req.body;
      if (!email || !password) {
        throw new Exception(
          'Please Provide Email & password ',
          http_status_code.BadRequest,
          'AQwOOq84'
        );
      }
      let user = await User.findOne({ email });

      const checkPass = bcrypt.compareSync(password, user.password);
      if (!user || !checkPass) {
        throw new Exception(
          'Email or password may be incorrect',
          http_status_code.BadRequest,
          'KUJIJ2c26'
        );
      }
      res.status(200).json({
        status: 'successful login Operation ',
        data: { token: createToken(user._id) },
      });
    } catch (ex) {
      console.error('ex Caught ', ex);
      res.status(400).json(ex);
    }
  },

  getCurrentUser: async (req, res) => {
    console.log('get current user ');
    try {
      const token = req.headers.authorization;
      if (token == null || (!!token && token.trim().length == 0)) {
        throw new Exception('Invalid token', Unauthorized, 'TKNINVD_xx3');
      }

      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const currentUser = await User.findById(decoded.currentUserId).select(
          '_id name email'
        );

        res.json(currentUser);
      } catch (exc) {
        console.log(exc);
        if (exc instanceof jwt.TokenExpiredError) {
          res.status(Unauthorized).send({ message: 'Token expired!' });
        }
        if (exc instanceof jwt.JsonWebTokenError) {
          res.status(Unauthorized).send({ message: 'Invalid token' });
        }
      }
    } catch (exc) {
      console.error('ex Caught ', exc);
      res.status(exc.statusCode || 400).json(exc);
    }
  },
  // ability &&  restric to current user
  //to update his data [ password , name ]  || not all data
  updateMe: async (req, res, next) => {
    try {
      // 1- create error if user  POSTS password Data
      console.log(req.user.password);
      if (!req.user.password)
        throw new Exception(
          `
               this route is not for passwords Update . Please use /updateMyPasswoed
             `,
          400,
          'srtDqdd22'
        );
      // 2- update user Document
      let data = filterObj(req.body, 'name', 'email');
      const upDatedUser = await User.findByIdAndUpdate(req.user.id, data, {
        new: true,
        runValidators: true,
      });
      res.status(200).send({
        status: 'Success Update Operation to current User ',
        upDatedUser,
      });
    } catch (ex) {
      console.error(exc);
      res.status(500).send(ex);
    }
  },
  updateUser: async () => {
    res.status(500).json({
      status: 'Error',
      message: ' this route is not defined yet  !! ',
    });
  },

  //  aBILITY TO USER TO DELETE HIS ACCOUNT
  deleteMe: async (req, res, next) => {
    try {
      const deletedUser = await User.findByIdAndUpdate(req.user.id, {
        active: false,
      });
      res.status(200).send({
        status: 'Success delete Operation to current User ',
        Note: ' User Still In Db ',
        deletedUser,
      });
    } catch (ex) {
      console.error(exc);
      res.status(404).send(ex);
    }
  },
};
