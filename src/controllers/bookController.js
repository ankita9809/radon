const { isValidObjectId } = require("mongoose")
const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publishersModel = require("../models/publisherModel")

//Problem 3

const createBook= async function (req, res) {
    let book = req.body
    
    let authorId = await authorModel.find().select({_id: 1})
    authorIdArr = authorId.map((obj) => {return obj._id.toString()})

    let publishedId = await publishersModel.find().select({_id: 1})
    publishedIdArr = publishedId.map((obj) => {return obj._id.toString()})

    if(book.author!= undefined){
        if(authorIdArr.includes(book.author)){
            if(book.publisher != undefined){
                if(publishedIdArr.includes(book.publisher)){
                    let bookCreated = await bookModel.create(book)
                    return res.send( {data: bookCreated})
                }
                return res.send("Invalid Publisher Id")
            }
            return res.send("Missing Publisher Id")
        }
        return res.send("Invalid Author Id")
    }
    return res.send("Missing Author Id")

    
}


const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

// Problem 4

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate([{ path: 'author' }, { path: 'publisher' }])
    res.send({data: specificBook})
}

//problem 5

const authorRating = async function(req,res){
    let check = await authorModel.find({rating : {$gte : 3.5}}).select('_id')
    let updatePrice = await bookModel.updateMany({author : check}, {$inc: {price : +10}})
    console.log(updatePrice)
    res.send({msg : updatePrice})
}


const booksByPut = async function(req, res){
    let book1 = await bookModel.findByIdAndUpdate( {"62a213f41e3fe40140b3878e"  "62a2391cd2b575bd68bb7633"}, {$set: {boolean: true}}, {$new : true})

        
    res.send({data: book1})
}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.authorRating = authorRating
module.exports.booksByPut = booksByPut