var express = require('express');
var router = express.Router();
const { register, login, getUserInfo, uploadTemp, uploadConfirm
,updateUserInfo, getUsers
} = require('../controller/userController');

router.post('/register', register);
router.get('/login', login);

router.get('/getUserInfo', getUserInfo);
router.get('/getUsers', getUsers);

router.post('/uploadTemp', uploadTemp);

router.get('/uploadConfirm', uploadConfirm)

router.post('/updateUserInfo', updateUserInfo)
module.exports = router;