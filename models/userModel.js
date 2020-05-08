var mongoose = require('mongoose');
// Schema
var userSchema = mongoose.Schema({
    firstname: {type: String, required: true},
    lastname: String,
    age: {type: Number, min: 1, max: 100, default: 15},
    status: {type: String, enum: ["Active","Inactive","Pending"], required: true},
    email: {type: String, require: true, lowercase: true, trim: true},
    created_date: {type: Date, default: Date.now}
});

var User = mongoose.model('users',userSchema);
module.exports = User;