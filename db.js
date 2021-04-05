require('dotenv').config();
const mongoose = require('mongoose');

function dbConnect() {
    // Db connection


mongoose.connect(process.env.MONGO_CONNECTION_URL, { userNewUrlParser: true, useUnifiedTopology: true, useUnifiedTopology:true, useFindAndModify: true})

const connection = mongoose.connection
connection.once('open', function() {
    console.log('Database connected...')
}).catch(function(err){
    console.log('Connection failed...')
})
}

module.exports = dbConnect
