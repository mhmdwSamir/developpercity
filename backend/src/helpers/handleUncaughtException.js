process.on("uncaughtException",(err)=>{

    if (err instanceof SyntaxError) {
        console.log("I caught a pesky SyntaxError! I'll handle it specifically here.");
      } else {
        console.log("I caught an error, but it wasn't a SyntaxError. I handle all non-SyntaxErrors here.");
      }
    
    console.log(err.name , err.message);
    console.log(" UNHANDLED uncaught Exception ☹️☹️");
    return
})
  
