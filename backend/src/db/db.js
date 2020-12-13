const mongoose = require('mongoose');
const server = '127.0.0.1:27017'; // REPLACE WITH YOUR DB SERVER
const database = 'Auth&Auz';      // REPLACE WITH YOUR DB NAME

class Database {
 options = {useNewUrlParser: true ,useUnifiedTopology: true ,useFindAndModify:false}
  constructor() {
    this._connect()
  }
_connect() {
     mongoose.connect(`mongodb://${server}/${database}`,this.options)
       .then(() => {
         console.log('Database connection successful :) ♥ ')
       })
       .catch(err => {
         console.log('Database connection error :(')
       })
  }
}


module.exports = new Database()