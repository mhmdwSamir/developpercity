const express = require("express");
const router = express.Router();

const eventController = require("../Controller/eventController/event.controller")
const handleAsync =require("../helpers/handle_async_Op.handler");
// const {protectRoute ,restricTo} = require("../Controller/AuthProtectRoute")

// const  {validate}  = require("../helpers/validateReq")


/*
*
********************************************
** All Routes related to interacte with Events || users || contributors || Admins
********************************************
*
*/

// route to get All getAllEvents
router.get("",handleAsync(eventController.getAllEvents))
// route to Add an Article || availabe to all only registered users 
router.post("/createEvent",handleAsync(eventController.createEvent))

module.exports = router