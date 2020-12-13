const Event = require("../../models/EventsModel/Event.model");
const http_status_code = require("../../helpers/http_status_code")
//const {Exception} = require("../../core/Exception/Exception");
// const catchAsync = require("../../helpers/handle_async_Op.handler")
 

module.exports = {
// getAllEvents
  getAllEvents:async (req,res,next)=>{
    try{
        let Events = await Event.find();
       
         console.log(Events)
        
        res.status(200).send({
        status: "Succes Operation  ",
         data : Events,
         resluts : Events.length
       })
    }catch(ex){
      console.log(ex);
      res.send(404 , ex)
    }
    
 },

//createEvent
  createEvent:async(req,res,next)=>{

    try{
        let event = new Event(req.body);
        
        event =  await event.save();
        res.status(http_status_code.Created).send({
        status : "suceesful  Create Operation Operation ♥♥!",
        event
      })
    }catch(ex){
      res.status(http_status_code.Not_Acceptable).send({ex})
    }
   
  },

}