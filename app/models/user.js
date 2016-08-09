var mongoose = require("mongoose");

//defining the user model to be saved in the mongo db
//module.exports let us pass things to othe files when the file is called
module.exports = mongoose.model('User', {
    name : {type: String, default:''},
    data : {type: Number, default:0, min:0},
    id : String,
    password : String
});