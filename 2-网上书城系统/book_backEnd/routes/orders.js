var express = require('express');
var router = express.Router();
const {getOrders} = require ('../controller/orderController')
// 查询所有书籍
router.get('/getOrders', getOrders);
module.exports = router;