
const {Exception} = require("../core/Exception/Exception");
const http_status_code = require("../helpers/http_status_code")
const Task = require("../models/task.model")
const express = require("express");
const router = express.Router();


// router to  add task || should be authenticated

router.post("/task",(req,res,next)=>{
 const user_id = req.user._id;
 const task = new Task ({
   ...req.body,
   owner:user_id
 })
 
 try{
    await task.save();
    res.status(200).send(task)
 } catch(ex){
    res.status(500).send(task)
 }
 


})

// get task related for me only
router.post("/tasks",(req,res,next)=>{
    const user_id = req.user._id;
    const task = new Task ({
      ...req.body,
      owner:user_id
    })
    
    try{
       await task.save();
       res.status(200).send(task)
    } catch(ex){
       res.status(500).send(task)
    }
    
   
   
   })


// get task related for any on 
router.post("/tasks/:id",(req,res,next)=>{
    const user_id = req.params.id;
    let isUser;
    try{
        isUser = await Task.findOne({_id:user_id});
       await Task.find({})
    } catch(ex){
       res.status(500).send(task)
    }
    
   
   
   })


// api to get all data of user sign in 
router.get("/me",async(req,res)=>{
   res.send(req.user)
})



module.exports = router