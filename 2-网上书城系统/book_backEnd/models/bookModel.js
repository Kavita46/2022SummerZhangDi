const mongoose = require('mongoose');


// MVC
// Model  , view, Controller,   


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
// 第一个参数:Model 名称, 第二个参数:Schema名称, 第三个参数:数据库中的表名
const bookModel = mongoose.model("bookModel",bookSchema,"bx_book_info")
// 后端暴露
module.exports = bookModel;