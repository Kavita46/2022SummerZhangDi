var express = require('express');
var router = express.Router();
const {getBooks,getBooksByPages} = require ('../controller/bookController')
// 查询所有书籍
router.get('/getBooks', getBooks);
module.exports = router;
// // 删除学生
// router.post('/deleteStudent', deleteStudent);
// // 查询一个学生
// router.get('/getById', getById);
// // 修改学生
// router.post('/editStudent', editStudent);
// // 搜索功能
// router.get('/searchStudent', searchStudent)
// // 分页功能
router.get('/getBooksByPages', getBooksByPages);

// router.post('/addStudent', addStudent)
// // 预上传
// router.post('/uploadTemp', uploadTemp);
// // 确认上传
// router.get('/uploadConfirm', uploadConfirm)

