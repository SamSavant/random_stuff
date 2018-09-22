//Model
var mongoose = require('mongoose');


//User Model
var User = mongoose.model('User', {
    emailAddress: {
        type: String,
        required: true,
        trim:true,
        minlength: 1
    }
});

module.exports = {User};