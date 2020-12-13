//   ☹️☹️")     can't get my data  ☹️☹️");


/* try 2*/

////////////////////////////////////////////////////////////
// var unirest = require("unirest");
// var req = unirest("GET", "https://movie-database-imdb-alternative.p.rapidapi.com/");
// req.query({
// 	"s": "Avengers Endgame",
// 	"page": "1",
// 	"r": "json"
// });

// req.headers({
// 	"x-rapidapi-key": "6cfbbe2abfmshb031998ed6b269ep16d31djsn636b3e4067ca",
// 	"x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
// 	"useQueryString": true
// });


// req.end(function (res) {
// //	if (res.error) throw new Error(res.error);

// 	console.log(res.body);
// });




///// TESTING //////////

const unirest = require("unirest"); 
const req = unirest("GET", "https://meetupdimashirokovv1.p.rapidapi.com/getEvents");
req.headers({
    "x-rapidapi-host": "MeetupdimashirokovV1.p.rapidapi.com",
    "x-rapidapi-key": "57cf6b48d7msh3db048621d0690bp1c23b4jsnccdfe148a07b",
    "content-type": "application/x-www-form-urlencoded",
    "useQueryString": true
});
req.form({});
req.end(function (res) {
   // if (res.error)  throw new Error(res.error);
    
   //console.log(" Message From Ending the req" ,res.body);
});
