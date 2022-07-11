const orderModel = require("../models/orderModel")

async function getOrders(){
}
// 1-查询所有书籍函数
async function getOrders(req, res, next) {
    const result = await orderModel.find();
    res.send({ result });
}

module.exports = {
    getOrders
};
