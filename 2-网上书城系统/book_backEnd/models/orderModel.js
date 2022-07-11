const mongoose = require('mongoose');

// 设置Schema(集合的字段)
const Schema = mongoose.Schema;
const orderSchema = new Schema({
orderid:String,
userid:String,
status:String,
orderdate:String,
subtotal:String,
modifydate:String

}, {
    // 避免产生无意义字段
    versionKey: false
}
);
const orderModel = mongoose.model("orderModel",orderSchema,"bx_orders")
// 后端暴露
module.exports = orderModel;