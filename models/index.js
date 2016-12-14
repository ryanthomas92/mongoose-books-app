var mongoose = require("mongoose");

// use native JS promise library instead of Mongoose's deprecated one
mongoose.Promise = global.Promise;

// connect to the localhost book-app database
mongoose.connect("mongodb://localhost/book-app");

module.exports.Book = require("./book.js");
