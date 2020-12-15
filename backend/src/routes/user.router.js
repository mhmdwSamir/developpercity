const express = require('express');
const router = express.Router();

const { AuthController } = require('../Controller');
const authController = new AuthController();
const { forgetPassword, resetPassword } = require('../Controller/globalAuth');
const { excuteHandler, requireAuth } = require('../middlewares');
const { fileUploadPipe } = require('../middlewares/pipes');

router.post('/signUp', excuteHandler(authController.signUp));
router.post('/logIn', excuteHandler(authController.logIn));
router.patch('/updateMe', requireAuth, excuteHandler(authController.updateMe));
router.delete('/deleteMe', requireAuth, excuteHandler(authController.deleteMe));
router.get('/user/all', excuteHandler(authController.getAllUsers));
router.post('/forgetPassword', excuteHandler(forgetPassword));
router.post('/resetPassword/:token', excuteHandler(resetPassword));
router.get('/logOut', (req, res) => {
    res.send('Unhandled route');
});
router.get('/logOutAllDevices', (req, res) => {
    // logic
    // remove from redis cache all tokens stored for current user.
    res.send('User will be Log Ou from all Devices ')
});
//  add capibality to upload file | img by user   || image 
router.patch(
    '/upload',
    requireAuth,
    fileUploadPipe({
        path: 'images/user-avatars',
        fileNameCb: (file, req) => {
            const [_, ext] = file.mimetype.split('/');
            return `user-${Date.now()}.${ext}`;
        },
        mimeTypes: ['image'],
    })
    .single('avatar'),
    (req, res) => {
        res.status(200).send({ upload: 'success' });
    });

module.exports = router;
