// Connect to db mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mydb1');
mongoose.Promise = global.Promise;

 //Model
var User = require("./usermodel");

User