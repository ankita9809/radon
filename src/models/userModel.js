const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {
        type: String,
        required: true
    },
    authorName: String,
    categoryName: {
        type: String,
        enum: ["Fiction", "Action", "Comics", "Health", "Reference", "Novel"]
    },
    year: Number
    //createdAt: 
    //updatedAt:


}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema) //users


