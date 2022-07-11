const mongoose = require('mongoose');

// 设置Schema(集合的字段)
const Schema = mongoose.Schema;
const userSchema = new Schema({
userid:String,
username:String,
city:String,
country:String,
age:String,
sex:String,
password:String,
role:String
}, {
    // 避免产生无意义字段
    versionKey: false
}
);

const userModel = mongoose.model("userModel", userSchema, "bx_users")
// 后端暴露
module.exports = userModel;