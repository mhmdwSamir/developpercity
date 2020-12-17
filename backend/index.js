// require("./src/helpers/handleUncaughtException");
// require("./src/helpers/handleSyntaxError");
require('dotenv').config({ path: "./config.env" });
require("./src/db/db");
const express = require("express");
const helmet = require("helmet");
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean')
const rateLimit = require("express-rate-limit");
const hpp = require('hpp');
const cors = require('cors');
const userRouter = require("./src/routes/user.router");
const articleRouter = require("./src/routes/article.router");
const reviewRouter = require("./src/routes/review.router");
const EventRouter = require("./src/routes/event.router");

const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const globalErrorHandler = require("./src/helpers/globalError.handler")


const Review = require("./src/models/review/review.model")

//const data = require("./src/core/Exception/EventApijs/event.api");



app.use(helmet());
// Data Sanitization aganist xss attaks
app.use(xss());
// Data Sanitization aganist NoSql query Injecion
app.use(mongoSanitize({ replaceWith: '_' }));

/* structure Paths */
const publicDirs = path.join(__dirname + "/public");


//Body Parser middleware && config

app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.json());
app.use(express.static(publicDirs));

// GlobalMiddelWare  || rateLimit PACKAGE protect from | BRUTE Force Attacks |
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: " Too Many Requests From this IP ☠️☠️☠️ "
});

// limit data in body to Only '10kb' 
app.use(hpp());
app.use(express.json({ limit: '10kb' }));
app.use(limiter);
app.use(cors());















// routes  

app.use("/api/auth", userRouter);
app.use("/api/articles", articleRouter);
app.use("/api/reviews", reviewRouter);
app.use("/api/events", EventRouter);











// requestTime
app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next()
})




//  globalErrorHandler   ||  handle unhandled routes  
app.use("*", globalErrorHandler);


//const PORT = process.env.PORT || 8080;

console.log("------♥♥♥♥♥♥--------");
const port = 3000;
const server = app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})


//handle unhandled promise rejections
process.on("unhandledRejection", (err) => {
    console.log(err.name, err.message);
    console.log(" UNHANDLED REJECTION ☹️☹️");
    server.close(() => {
        process.exit(1)
    })
});