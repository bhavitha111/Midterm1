
/*
File Name - books.js
Student Name - Bhavitha Penaka
Student ID - 301211147
Date - 27-10-2022
*/





let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);
