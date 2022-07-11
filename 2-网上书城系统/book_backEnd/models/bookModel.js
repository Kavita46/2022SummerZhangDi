const mongoose = require('mongoose');

// 设置Schema(集合的字段)
const Schema = mongoose.Schema;
const bookSchema = new Schema({
    title: String,
    pic1: String,
    describle: String,
    author: String,
    press: String,
    publish_date: String,
    unitprice: String,
    commentnum: String,
    bookid: String,
    tags: { type: Array, default: [] },
    rating: String,

}, {
    // 避免产生无意义字段
    versionKey: false
}
);
const bookModel = mongoose.model("bookModek",bookSchema,"bx_book_info")
// 后端暴露
module.exports = bookModel;