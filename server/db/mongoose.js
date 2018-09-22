var mongoose = require('mongoose');

//connect to mongo database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {
    mongoose
};