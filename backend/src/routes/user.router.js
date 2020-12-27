const express = require("express");
const multer = require("multer");
const router = express.Router();
const Authhandlers = require("../Controller/Authhandlers");

const { protect, restricTo, deleteMe, forgetPassword, resetPassword } = require("../Controller/globalAuth");
const { Exception } = require("../core/Exception/Exception");
const http_status_code = require("../helpers/http_status_code");


// const createToken = (id) => {
//     const token = jwt.sign({ id }, process.env.JWT_SECRET, {
//         expiresIn: process.env.JWT_EXPIRES_IN
//     })
//     return token
// }


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/img/userImage')
    },
    filename: (req, file, cb) => {
        const ext = file.mimetype.split("/")[1] // Please give me Extension
        cb(null, ` user-${req.user.id}-${Date.now()}.${ext}`)
    }
});

const multerFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image")) {
        cb(null, true)
    } else {
        cb(new Exception("Please Upload Only Images", http_status_code.Not_Acceptable, "HUSLJhh44"), fales)
    }
}
const upload = multer({
    storage,
    multerFilter
});




//  User Capability ||  


router.post("/signUp", Authhandlers.signUp)
router.post("/logIn", Authhandlers.logIn)




router.patch("/updateMe", protect, Authhandlers.updateMe)
router.delete("/deleteMe", protect, Authhandlers.deleteMe)




router.get("/getAllUsers", Authhandlers.getAllUsers)



router.post("/forgetPassword", forgetPassword)
router.post("/resetPassword/:token", resetPassword)



router.get("/logOut", (req, res) => {

    // const logORes = req.logout();
    console.log(req.user)
    res.send(req.user)
})
router.get("/logOutAllDevices", (req, res) => {
    // logic
    // console.log(token)
    // req.user.deleteToken(req.token,(err,user)=>{
    //   if(err) return res.status(400).send(err);
    //   res.sendStatus(200);
    // });
    res.send("User will be Log Ou from all Devices ")

})


//  add capibality to upload file | img by user   || image 
router.patch("/upload", upload.single('avatar'), (req, res) => {
    console.log(req.file)
    console.log(req.body)
})







module.exports = router