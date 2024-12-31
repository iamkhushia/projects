const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://khushigondaliya736:khushia1124@cluster0.2j6jh.mongodb.net/apiproject');

const db = mongoose.connection;

db.on('connected' ,(err) =>{
    if(err){
        console.log(err);
        return false; 
    }
    console.log('DB is connected');const mongoose = require('mongoose');
});


module.exports = {db}