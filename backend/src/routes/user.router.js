const express = require('express');
const router = express.Router();

const Authhandlers = require('../Controller/Authhandlers');
const { forgetPassword, resetPassword } = require('../Controller/globalAuth');
const { excuteHandler, requireAuth } = require('../middlewares');
const { fileUploadPipe } = require('../middlewares/pipes');

router.post('/signUp', excuteHandler(Authhandlers.signUp));
router.post('/logIn', excuteHandler(Authhandlers.logIn));
router.patch('/updateMe', requireAuth, excuteHandler(Authhandlers.updateMe));
router.delete('/deleteMe', requireAuth, excuteHandler(Authhandlers.deleteMe));
router.get('/getAllUsers', excuteHandler(Authhandlers.getAllUsers));
router.post('/forgetPassword', excuteHandler(forgetPassword));
router.post('/resetPassword/:token', excuteHandler(resetPassword));
router.get('/logOut', (req, res) => {

    // const logORes = req.logout();
    console.log(req.user)
    res.send(req.user)
});
router.get('/logOutAllDevices', (req, res) => {
    // logic
    // console.log(token)
    // req.user.deleteToken(req.token,(err,user)=>{
    //   if(err) return res.status(400).send(err);
    //   res.sendStatus(200);
    // });
    res.send('User will be Log Ou from all Devices ')

});
//  add capibality to upload file | img by user   || image 
router.patch(
    '/upload',
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
    })

module.exports = router;
