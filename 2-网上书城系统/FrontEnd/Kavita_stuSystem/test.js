/*
 Navicat Premium Data Transfer

 Source Server         : mongoDB
 Source Server Type    : MongoDB
 Source Server Version : 40217
 Source Host           : localhost:27017
 Source Schema         : test

 Target Server Type    : MongoDB
 Target Server Version : 40217
 File Encoding         : 65001

 Date: 06/07/2022 14:44:02
*/


// ----------------------------
// Collection structure for academy
// ----------------------------
db.getCollection("academy").drop();
db.createCollection("academy");

// ----------------------------
// Documents of academy
// ----------------------------
session = db.getMongo().startSession();
session.startTransaction();
db = session.getDatabase("test");
db.getCollection("academy").insert([ {
    _id: ObjectId("62c46051b043c963b41e2699"),
    aname: "理学院",
    aId: 1,
    mCount: 5,
    acount: 553
} ]);
db.getCollection("academy").insert([ {
    _id: ObjectId("62c46105b043c963b41e26a2"),
    aname: "语传学院",
    mCount: 3,
    aId: 2,
    acount: 334
} ]);
db.getCollection("academy").insert([ {
    _id: ObjectId("62c4611fb043c963b41e26a3"),
    aname: "工学院",
    mCount: 4,
    aId: 3,
    acount: 778
} ]);
db.getCollection("academy").insert([ {
    _id: ObjectId("62c4612db043c963b41e26a4"),
    aname: "电气学院",
    mCount: 2,
    aId: 4,
    acount: 666
} ]);
db.getCollection("academy").insert([ {
    _id: ObjectId("62c471deb043c963b41e26a8"),
    aname: "建筑学院",
    aId: 5,
    mCount: 2,
    acount: 330
} ]);
db.getCollection("academy").insert([ {
    _id: ObjectId("62c471eab043c963b41e26a9"),
    aname: "经管学院",
    aId: 6,
    mCount: 4,
    acount: 555
} ]);
db.getCollection("academy").insert([ {
    _id: ObjectId("62c47e95b043c963b41e26b2"),
    aId: 7,
    acount: 278,
    aname: "软件学院",
    mCount: 1
} ]);
session.commitTransaction(); session.endSession();

// ----------------------------
// Collection structure for banners
// ----------------------------
db.getCollection("banners").drop();
db.createCollection("banners");

// ----------------------------
// Documents of banners
// ----------------------------
session = db.getMongo().startSession();
session.startTransaction();
db = session.getDatabase("test");
db.getCollection("banners").insert([ {
    _id: ObjectId("61b0184aadefd0e87ec19ee3"),
    picName: "1638930506182-h19.jpg"
} ]);
db.getCollection("banners").insert([ {
    _id: ObjectId("61b0184aadefd0e87ec19ee4"),
    picName: "1638930506183-h20.jpg"
} ]);
db.getCollection("banners").insert([ {
    _id: ObjectId("61b0184aadefd0e87ec19ee5"),
    picName: "1638930506184-h21.jpg"
} ]);
db.getCollection("banners").insert([ {
    _id: ObjectId("61b0184aadefd0e87ec19ee6"),
    picName: "1638930506185-h22.jpg"
} ]);
db.getCollection("banners").insert([ {
    _id: ObjectId("61b0184aadefd0e87ec19ee7"),
    picName: "1638930506186-h23.jpg"
} ]);
session.commitTransaction(); session.endSession();

// ----------------------------
// Collection structure for classes
// ----------------------------
db.getCollection("classes").drop();
db.createCollection("classes");

// ----------------------------
// Documents of classes
// ----------------------------
session = db.getMongo().startSession();
session.startTransaction();
db = session.getDatabase("test");
db.getCollection("classes").insert([ {
    _id: ObjectId("61aae2c7a97579378d12c168"),
    cname: "传媒1801班",
    count: 37,
    cid: 1,
    major: "新闻传媒"
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("61aae2cea97579378d12c169"),
    cname: "电气1902班",
    count: 42,
    cid: 2,
    major: "电气工程"
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("61aae2d8a97579378d12c16a"),
    cname: "电子2001班",
    count: 55,
    cid: 3,
    major: "电气工程"
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("62c45fd27f5ae4786dd10d8b"),
    cname: "土木1901班",
    count: NumberInt("33"),
    cid: NumberInt("4"),
    major: "土木工程"
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("62c47968b043c963b41e26aa"),
    cid: 5,
    cname: "英语1801班",
    count: 20,
    major: "英语"
} ]);
db.getCollection("classes").insert([ {
    _id: ObjectId("62c4798bb043c963b41e26ab"),
    cname: "经管1903班",
    count: 32,
    cid: 6,
    major: "工商管理"
} ]);
session.commitTransaction(); session.endSession();

// ----------------------------
// Collection structure for courses
// ----------------------------
db.getCollection("courses").drop();
db.createCollection("courses");

// ----------------------------
// Documents of courses
// ----------------------------
session = db.getMongo().startSession();
session.startTransaction();
db = session.getDatabase("test");
db.getCollection("courses").insert([ {
    _id: ObjectId("62bedbf8fdb64b3e132ea552"),
    cid: 1,
    cname: "测试修改",
    aname: "测试修改",
    tname: "测试修改",
    type: "测试修改",
    delFlag: NumberInt("1")
} ]);
db.getCollection("courses").insert([ {
    _id: ObjectId("62bedc15fdb64b3e132ea553"),
    cid: 2,
    cname: "概率论与数理统计",
    type: "必修课",
    aname: "理学院",
    tname: "蔡复",
    delFlag: NumberInt("1")
} ]);
db.getCollection("courses").insert([ {
    _id: ObjectId("62bedc23fdb64b3e132ea554"),
    cname: "数字电子技术",
    cid: 3,
    type: "必修课",
    aname: "电气学院",
    tname: "罗老师",
    delFlag: 0
} ]);
db.getCollection("courses").insert([ {
    _id: ObjectId("62bedc46fdb64b3e132ea556"),
    cname: "C语言程序设计[1]",
    cid: 4,
    type: "必修课",
    aname: "软件学院",
    tname: "吴彦祖",
    delFlag: 0
} ]);
db.getCollection("courses").insert([ {
    _id: ObjectId("62bedc51fdb64b3e132ea557"),
    cname: "Web程序设计",
    cid: 5,
    type: "必修课",
    aname: "软件学院",
    tname: "吴彦祖",
    delFlag: 0
} ]);
db.getCollection("courses").insert([ {
    _id: ObjectId("62bedc6ffdb64b3e132ea559"),
    cname: "学术论文写作",
    cid: 6,
    type: "选修课",
    aname: "语传学院",
    tname: "段慧",
    delFlag: 0
} ]);
db.getCollection("courses").insert([ {
    _id: ObjectId("62bedc7afdb64b3e132ea55a"),
    cname: "男子篮球",
    cid: 7,
    type: "选修课",
    aname: "体育学院",
    tname: "姚明",
    delFlag: 0
} ]);
db.getCollection("courses").insert([ {
    _id: ObjectId("62bedc98fdb64b3e132ea55b"),
    cname: "大学物理",
    cid: 8,
    type: "必修课",
    aname: "理学院",
    tname: "孙敬",
    delFlag: 0
} ]);
db.getCollection("courses").insert([ {
    _id: ObjectId("62bedcb5fdb64b3e132ea55c"),
    cname: "高等数学[1]",
    cid: 9,
    type: "必修课",
    aname: "理学院",
    tname: "蔡复",
    delFlag: 0
} ]);
db.getCollection("courses").insert([ {
    _id: ObjectId("62c47fd2b043c963b41e26b4"),
    cname: "高等数学[2]",
    cid: 10,
    tname: "蔡复",
    type: "必修课",
    aname: "理学院",
    delFlag: 0
} ]);
session.commitTransaction(); session.endSession();

// ----------------------------
// Collection structure for exams
// ----------------------------
db.getCollection("exams").drop();
db.createCollection("exams");

// ----------------------------
// Documents of exams
// ----------------------------
session = db.getMongo().startSession();
session.startTransaction();
db = session.getDatabase("test");
db.getCollection("exams").insert([ {
    _id: ObjectId("62c46358b043c963b41e26a7"),
    cname: "Web程序设计",
    tname: "吴彦祖",
    site: "第二教学楼201",
    time: "7月6日10:00~12:00",
    isOpen: "开卷",
    flag: NumberInt("0")
} ]);
db.getCollection("exams").insert([ {
    _id: ObjectId("62c48353b043c963b41e26b5"),
    cname: "高等数学",
    tname: "蔡复",
    site: "第一教学楼302",
    time: "7月9日14:00~16:00",
    isOpen: "闭卷",
    flag: 0
} ]);
db.getCollection("exams").insert([ {
    _id: ObjectId("62c48694f15975776cc46b86"),
    cname: "大学物理",
    tname: "张三",
    site: "第三教学楼101",
    time: "7月7日9:00~11:10",
    isOpen: "开卷",
    flag: NumberInt("1")
} ]);
db.getCollection("exams").insert([ {
    _id: ObjectId("62c48a6ff15975776cc46b9b"),
    cname: "C语言程序设计[1]",
    tname: "李四",
    site: "fsd",
    time: "fds",
    isOpen: "闭卷",
    flag: NumberInt("2")
} ]);
db.getCollection("exams").insert([ {
    _id: ObjectId("62c48aa5f15975776cc46b9e"),
    cname: "C语言程序设计[1]",
    tname: "王五",
    site: "复赛",
    time: "fdas",
    isOpen: "闭卷",
    flag: NumberInt("2")
} ]);
session.commitTransaction(); session.endSession();

// ----------------------------
// Collection structure for majors
// ----------------------------
db.getCollection("majors").drop();
db.createCollection("majors");

// ----------------------------
// Documents of majors
// ----------------------------
session = db.getMongo().startSession();
session.startTransaction();
db = session.getDatabase("test");
db.getCollection("majors").insert([ {
    _id: ObjectId("62c46082b043c963b41e269a"),
    mname: "电子信息工程",
    aname: "电气学院",
    mid: 1,
    stuCount: "211"
} ]);
db.getCollection("majors").insert([ {
    _id: ObjectId("62c4608db043c963b41e269b"),
    mname: "土木工程",
    mid: 2,
    stuCount: "133",
    aname: "建筑学院"
} ]);
db.getCollection("majors").insert([ {
    _id: ObjectId("62c460afb043c963b41e269c"),
    mname: "材料",
    mid: 3,
    stuCount: "213",
    aname: "理学院"
} ]);
db.getCollection("majors").insert([ {
    _id: ObjectId("62c460b2b043c963b41e269d"),
    mname: "自动化",
    mid: 4,
    stuCount: "114",
    aname: "工学院"
} ]);
db.getCollection("majors").insert([ {
    _id: ObjectId("62c460b8b043c963b41e269e"),
    mname: "电气工程",
    mid: 5,
    stuCount: "219",
    aname: "电气学院"
} ]);
db.getCollection("majors").insert([ {
    _id: ObjectId("62c460beb043c963b41e269f"),
    mname: "车辆工程",
    mid: 6,
    stuCount: "115",
    aname: "工学院"
} ]);
db.getCollection("majors").insert([ {
    _id: ObjectId("62c460c0b043c963b41e26a0"),
    mname: "英语",
    mid: 7,
    stuCount: "170",
    aname: "语传学院"
} ]);
db.getCollection("majors").insert([ {
    _id: ObjectId("62c460d0b043c963b41e26a1"),
    mname: "工商管理",
    mid: 8,
    stuCount: "180",
    aname: "经管学院"
} ]);
db.getCollection("majors").insert([ {
    _id: ObjectId("62c461f1b043c963b41e26a5"),
    mname: "经济学",
    mid: 9,
    stuCount: "233",
    aname: "经管学院"
} ]);
db.getCollection("majors").insert([ {
    _id: ObjectId("62c461f3b043c963b41e26a6"),
    mname: "新闻传媒",
    mid: 10,
    stuCount: "77",
    aname: "语传学院"
} ]);
session.commitTransaction(); session.endSession();

// ----------------------------
// Collection structure for scores
// ----------------------------
db.getCollection("scores").drop();
db.createCollection("scores");

// ----------------------------
// Documents of scores
// ----------------------------
session = db.getMongo().startSession();
session.startTransaction();
db = session.getDatabase("test");
db.getCollection("scores").insert([ {
    _id: ObjectId("62bedf82fdb64b3e132ea55e"),
    sid: 183010,
    cid: 4,
    score: NumberInt("33")
} ]);
db.getCollection("scores").insert([ {
    _id: ObjectId("62bedfadfdb64b3e132ea560"),
    cid: 3,
    score: NumberInt("-1"),
    sid: 183012
} ]);
db.getCollection("scores").insert([ {
    _id: ObjectId("62bedfbcfdb64b3e132ea561"),
    sid: 183018,
    cid: 7,
    score: NumberInt("78")
} ]);
db.getCollection("scores").insert([ {
    _id: ObjectId("62bedfc7fdb64b3e132ea562"),
    sid: 183016,
    cid: 5,
    score: -1
} ]);
db.getCollection("scores").insert([ {
    _id: ObjectId("62bedfe0fdb64b3e132ea563"),
    sid: 183011,
    cid: 4,
    score: 88
} ]);
db.getCollection("scores").insert([ {
    _id: ObjectId("62bedfe7fdb64b3e132ea564"),
    sid: 183013,
    cid: 3,
    score: 96
} ]);
db.getCollection("scores").insert([ {
    _id: ObjectId("62bedff0fdb64b3e132ea565"),
    sid: 183015,
    cid: 8,
    score: 77
} ]);
db.getCollection("scores").insert([ {
    _id: ObjectId("62bee018fdb64b3e132ea566"),
    sid: 183014,
    cid: 3,
    score: NumberInt("77")
} ]);
db.getCollection("scores").insert([ {
    _id: ObjectId("62bee01efdb64b3e132ea567"),
    sid: 183015,
    cid: 4,
    score: 98
} ]);
db.getCollection("scores").insert([ {
    _id: ObjectId("62bee026fdb64b3e132ea568"),
    sid: 183010,
    cid: 7,
    score: 87
} ]);
db.getCollection("scores").insert([ {
    _id: ObjectId("62bee037fdb64b3e132ea569"),
    sid: 183014,
    cid: 9,
    score: 88
} ]);
db.getCollection("scores").insert([ {
    _id: ObjectId("62bee03ffdb64b3e132ea56a"),
    sid: 183017,
    cid: 5,
    score: 77
} ]);
db.getCollection("scores").insert([ {
    _id: ObjectId("62bef5b4ad596b3b6219bff2"),
    sid: 183010,
    cid: NumberInt("2"),
    score: NumberInt("66")
} ]);
db.getCollection("scores").insert([ {
    _id: ObjectId("62c3279db043c963b41e2693"),
    sid: 183011,
    cid: 7,
    score: -1
} ]);
db.getCollection("scores").insert([ {
    _id: ObjectId("62c327a4b043c963b41e2694"),
    sid: 183016,
    cid: 5,
    score: -1
} ]);
db.getCollection("scores").insert([ {
    _id: ObjectId("62c327aeb043c963b41e2695"),
    sid: 183018,
    cid: 3,
    score: 78
} ]);
session.commitTransaction(); session.endSession();

// ----------------------------
// Collection structure for students
// ----------------------------
db.getCollection("students").drop();
db.createCollection("students");

// ----------------------------
// Documents of students
// ----------------------------
session = db.getMongo().startSession();
session.startTransaction();
db = session.getDatabase("test");
db.getCollection("students").insert([ {
    _id: ObjectId("61a4b0ff43560000550066ef"),
    sname: "项佐涛",
    age: NumberInt("20"),
    address: "重庆",
    gender: "男",
    hobby: [
        "吃饭",
        "睡觉",
        "打豆豆"
    ],
    "cla_id": "61aae2c7a97579378d12c168",
    flag: NumberInt("0"),
    imgs: "head.png",
    cid: 1
} ]);
db.getCollection("students").insert([ {
    _id: ObjectId("61a4b0ff43560000550066f0"),
    sname: "雷少华",
    age: NumberInt("22"),
    address: "上海",
    gender: "女",
    hobby: [
        "吃饭",
        "睡觉"
    ],
    "cla_id": "61aae2cea97579378d12c169",
    flag: NumberInt("0"),
    imgs: "h1.jpg",
    cid: 2
} ]);
db.getCollection("students").insert([ {
    _id: ObjectId("61a4b0ff43560000550066f1"),
    sname: "施润茜",
    age: NumberInt("23"),
    address: "重庆",
    gender: "男",
    hobby: [
        "吃饭",
        "打豆豆"
    ],
    "cla_id": "61aae2c7a97579378d12c168",
    flag: NumberInt("0"),
    imgs: "h2.jpg",
    cid: 1
} ]);
db.getCollection("students").insert([ {
    _id: ObjectId("61a4b0ff43560000550066f4"),
    sname: "祝诣博",
    age: 36,
    address: "成都",
    gender: "女",
    hobby: [
        "吃饭",
        "睡觉"
    ],
    "cla_id": "61aae2cea97579378d12c169",
    flag: NumberInt("0"),
    imgs: "h3.jpg",
    cid: 2
} ]);
db.getCollection("students").insert([ {
    _id: ObjectId("61a5cd9b43560000550066f6"),
    sname: "高静",
    age: 18,
    address: "成都",
    gender: "男",
    hobby: [
        "吃饭",
        "睡觉"
    ],
    "cla_id": "61aae2cea97579378d12c169",
    flag: NumberInt("0"),
    imgs: "h5.jpg",
    cid: 2
} ]);
db.getCollection("students").insert([ {
    _id: ObjectId("61a5cdc443560000550066f7"),
    sname: "赵娜",
    age: 18,
    address: "上海",
    gender: "女",
    hobby: [
        "吃饭",
        "睡觉"
    ],
    "cla_id": "61aae2cea97579378d12c169",
    flag: NumberInt("0"),
    imgs: "head.png",
    cid: 2
} ]);
db.getCollection("students").insert([ {
    _id: ObjectId("61a5cdfb43560000550066f8"),
    sname: "宋昊天",
    age: 18,
    address: "成都",
    gender: "男",
    hobby: [
        "吃饭",
        "睡觉"
    ],
    "cla_id": "61aae2cea97579378d12c169",
    flag: NumberInt("0"),
    imgs: "h5.jpg",
    cid: 2
} ]);
db.getCollection("students").insert([ {
    _id: ObjectId("61a5ce0143560000550066f9"),
    sname: "王雨濛",
    age: 18,
    address: "上海",
    gender: "男",
    hobby: [
        "吃饭",
        "睡觉"
    ],
    "cla_id": "61aae2d8a97579378d12c16a",
    flag: NumberInt("0"),
    imgs: "head.png",
    cid: 3
} ]);
db.getCollection("students").insert([ {
    _id: ObjectId("61a5ce0743560000550066fa"),
    sname: "张海滨",
    age: NumberInt("20"),
    address: "上海",
    gender: "女",
    hobby: [
        ""
    ],
    "cla_id": "61aae2d8a97579378d12c16a",
    flag: NumberInt("0"),
    imgs: "h8.jpg",
    cid: 3
} ]);
db.getCollection("students").insert([ {
    _id: ObjectId("61a5ce0d43560000550066fb"),
    sname: "陈绍锋",
    age: NumberInt("18"),
    address: "上海",
    gender: "男",
    hobby: [
        "吃饭",
        "睡觉"
    ],
    "cla_id": "61aae2cea97579378d12c169",
    flag: NumberInt("0"),
    imgs: "h12.jpg",
    cid: 2
} ]);
db.getCollection("students").insert([ {
    _id: ObjectId("61a5ce1343560000550066fc"),
    sid: 183010,
    sname: "张清敏",
    age: NumberInt("20"),
    address: "重庆",
    gender: "男",
    hobby: [
        "睡觉"
    ],
    "cla_id": "61aae2c7a97579378d12c168",
    flag: 1,
    imgs: "1656516369847-飞科.png",
    cid: 3,
    major: "电子信息工程"
} ]);
db.getCollection("students").insert([ {
    _id: ObjectId("61a5ce1c43560000550066fd"),
    sname: "王雨濛",
    age: NumberInt("21"),
    address: "重庆",
    gender: "男",
    hobby: [
        "打豆豆"
    ],
    "cla_id": "61aae2c7a97579378d12c168",
    flag: 1,
    imgs: "1640171078234-Bella.jpg",
    cid: 1,
    major: "计算机技术",
    sid: 183011
} ]);
db.getCollection("students").insert([ {
    _id: ObjectId("61a6ef95197d37b05352be07"),
    sname: "刘强东",
    age: NumberInt("20"),
    address: "重庆",
    gender: "女",
    hobby: [
        "吃饭",
        "睡觉"
    ],
    "cla_id": "61aae2c7a97579378d12c168",
    flag: 1,
    imgs: "1640170411397-p256193970.jpg",
    cid: 1,
    major: "自动化",
    sid: 183012
} ]);
db.getCollection("students").insert([ {
    _id: ObjectId("61adb9bfaceb13d873a26be3"),
    sname: "董昭华",
    address: "上海",
    age: NumberInt("22"),
    gender: "女",
    hobby: [
        "睡觉",
        "打豆豆"
    ],
    "cla_id": "61aae2c7a97579378d12c168",
    imgs: "1640174994231-p240870455_jpg.png",
    flag: 1,
    cid: 1,
    major: "电子信息工程",
    sid: 183013
} ]);
db.getCollection("students").insert([ {
    _id: ObjectId("61adba01aceb13d873a26be8"),
    sname: "杜圣伦",
    address: "北京",
    age: NumberInt("33"),
    gender: "男",
    hobby: [
        "睡觉",
        "打豆豆"
    ],
    "cla_id": "61aae2c7a97579378d12c168",
    imgs: "1640175004870-p260920899.jpg",
    flag: 1,
    cid: 1,
    major: "土木工程",
    sid: 183014
} ]);
db.getCollection("students").insert([ {
    _id: ObjectId("61adba5baceb13d873a26bf2"),
    sname: "管文韬",
    address: "天津",
    age: NumberInt("15"),
    gender: "男",
    hobby: [
        "睡觉"
    ],
    "cla_id": "61aae2c7a97579378d12c168",
    imgs: "h10.jpg",
    flag: 1,
    cid: 1,
    major: "电气工程",
    sid: 183015
} ]);
db.getCollection("students").insert([ {
    _id: ObjectId("61adbb2aaceb13d873a26c25"),
    sname: "黄子文",
    address: "江北",
    age: NumberInt("22"),
    gender: "女",
    hobby: [
        "睡觉",
        "打豆豆"
    ],
    "cla_id": "61aae2c7a97579378d12c168",
    imgs: "1656955904150-8f624034970a304e5ff2101194c8a786cb175c82.jpg",
    flag: 1,
    cid: 1,
    major: "车辆工程",
    sid: 183016
} ]);
db.getCollection("students").insert([ {
    _id: ObjectId("61adbc72aceb13d873a26c2a"),
    sname: "李芃芃",
    address: "广西",
    age: NumberInt("15"),
    gender: "男",
    hobby: [
        "打豆豆"
    ],
    "cla_id": "61aae2c7a97579378d12c168",
    imgs: "1656955869917-c8dccc11728b4710421735df9ecec3fdfc032363.jpg",
    flag: 1,
    cid: 1,
    major: "电气工程",
    sid: 183017
} ]);
db.getCollection("students").insert([ {
    _id: ObjectId("61af00c9cdf9e8739323ca66"),
    sname: "林忻",
    age: NumberInt("20"),
    address: "海南",
    gender: "女",
    hobby: [
        "吃饭",
        "睡觉",
        "打豆豆"
    ],
    "cla_id": "61aae2c7a97579378d12c168",
    flag: 1,
    imgs: "1656955889894-df36d01373f0820279a9592c16fbfbedab641b63.jpg",
    cid: 1,
    major: "计算机技术",
    sid: 183018
} ]);
db.getCollection("students").insert([ {
    _id: ObjectId("61baf22ed71c84a4feb2cd04"),
    sname: "张三",
    address: "",
    age: NumberInt("12"),
    gender: "男",
    hobby: [
        ""
    ],
    flag: NumberInt("0"),
    "cla_id": "61aae2cea97579378d12c169",
    imgs: "head.png",
    cid: 2
} ]);
db.getCollection("students").insert([ {
    _id: ObjectId("61baf3f5a0de5aff8d56e368"),
    sname: "吴亦凡",
    address: "北京",
    age: NumberInt("123"),
    gender: "女",
    hobby: [
        ""
    ],
    "cla_id": "61aae2cea97579378d12c169",
    flag: NumberInt("0"),
    imgs: "head.png",
    cid: 2
} ]);
db.getCollection("students").insert([ {
    _id: ObjectId("61bb1c4aa0de5aff8d56e37e"),
    sname: "周杰伦",
    address: "1",
    age: NumberInt("1"),
    gender: "1",
    hobby: [
        ""
    ],
    "cla_id": "61aae2cea97579378d12c169",
    flag: NumberInt("0"),
    imgs: "head.png",
    cid: 2
} ]);
db.getCollection("students").insert([ {
    _id: ObjectId("61bb2a02a0de5aff8d56e3e2"),
    sname: "林俊杰",
    address: "1",
    age: NumberInt("12"),
    gender: "男",
    hobby: [
        ""
    ],
    "cla_id": "61aae2cea97579378d12c169",
    flag: NumberInt("0"),
    imgs: "head.png",
    cid: 2
} ]);
db.getCollection("students").insert([ {
    _id: ObjectId("61bb2fb3a0de5aff8d56f27f"),
    sname: "梁静茹",
    address: "枝江",
    age: NumberInt("17"),
    gender: "女",
    hobby: [
        ""
    ],
    "cla_id": "61aae2cea97579378d12c169",
    flag: NumberInt("0"),
    imgs: "head.png",
    cid: 2
} ]);
db.getCollection("students").insert([ {
    _id: ObjectId("61bc07bb120789c30c42ee6a"),
    sname: "王家卫",
    address: "1",
    age: NumberInt("1"),
    gender: "1",
    hobby: [
        ""
    ],
    "cla_id": "61aae2cea97579378d12c169",
    flag: NumberInt("0"),
    imgs: "head.png",
    cid: 2
} ]);
db.getCollection("students").insert([ {
    _id: ObjectId("61bc07d0120789c30c42ee6c"),
    sname: "梁朝伟",
    address: "1",
    age: NumberInt("1"),
    gender: "1",
    hobby: [
        ""
    ],
    "cla_id": "61aae2cea97579378d12c169",
    flag: NumberInt("0"),
    imgs: "head.png",
    cid: 2
} ]);
db.getCollection("students").insert([ {
    _id: ObjectId("61bc07fb120789c30c42ee6e"),
    sname: "侯孝贤",
    address: "1",
    age: NumberInt("1"),
    gender: "1",
    hobby: [
        ""
    ],
    "cla_id": "61aae2cea97579378d12c169",
    flag: NumberInt("0"),
    imgs: "head.png",
    cid: 2
} ]);
db.getCollection("students").insert([ {
    _id: ObjectId("61bc0825120789c30c42ee72"),
    sname: "金城武",
    address: "1",
    age: NumberInt("1"),
    gender: "1",
    hobby: [
        ""
    ],
    "cla_id": "61aae2cea97579378d12c169",
    flag: NumberInt("0"),
    imgs: "head.png",
    cid: 2
} ]);
session.commitTransaction(); session.endSession();

// ----------------------------
// Collection structure for teachers
// ----------------------------
db.getCollection("teachers").drop();
db.createCollection("teachers");

// ----------------------------
// Documents of teachers
// ----------------------------
session = db.getMongo().startSession();
session.startTransaction();
db = session.getDatabase("test");
db.getCollection("teachers").insert([ {
    _id: ObjectId("62c3b3e1b043c963b41e2696"),
    tid: 1100,
    tname: "罗翔",
    title: "副教授",
    age: NumberInt("44"),
    sex: "男",
    aname: "电气学院"
} ]);
db.getCollection("teachers").insert([ {
    _id: ObjectId("62c3b413b043c963b41e2697"),
    tid: 1122,
    title: "教授",
    tname: "王立鼎",
    age: NumberInt("56"),
    sex: "男",
    aname: "工学院"
} ]);
db.getCollection("teachers").insert([ {
    _id: ObjectId("62c47b84b043c963b41e26ac"),
    tid: 1133,
    tname: "段慧",
    title: "讲师",
    age: 37,
    sex: "女",
    aname: "语传学院"
} ]);
db.getCollection("teachers").insert([ {
    _id: ObjectId("62c47bacb043c963b41e26ad"),
    tid: 1117,
    tname: "邓航",
    title: "讲师",
    age: 38,
    sex: "男",
    aname: "经管学院"
} ]);
db.getCollection("teachers").insert([ {
    _id: ObjectId("62c47e19b043c963b41e26ae"),
    tname: "孙敬",
    age: 35,
    aname: "理学院",
    sex: "男",
    title: "讲师",
    tid: 1120
} ]);
db.getCollection("teachers").insert([ {
    _id: ObjectId("62c47e5bb043c963b41e26af"),
    tname: "吴彦祖",
    tid: 1155,
    title: "副教授",
    age: 53,
    sex: "男",
    aname: "软件学院"
} ]);
db.getCollection("teachers").insert([ {
    _id: ObjectId("62c47e6ab043c963b41e26b0"),
    tname: "姚明",
    tid: 1177,
    title: "讲师",
    age: 33,
    sex: "男",
    aname: "体育学院"
} ]);
db.getCollection("teachers").insert([ {
    _id: ObjectId("62c47e8cb043c963b41e26b1"),
    tid: 1173,
    tname: "蔡复",
    title: "副教授",
    age: 50,
    sex: "男",
    aname: "理学院"
} ]);
session.commitTransaction(); session.endSession();

// ----------------------------
// Collection structure for users
// ----------------------------
db.getCollection("users").drop();
db.createCollection("users");

// ----------------------------
// Documents of users
// ----------------------------
session = db.getMongo().startSession();
session.startTransaction();
db = session.getDatabase("test");
db.getCollection("users").insert([ {
    _id: ObjectId("61a8224cb3f5ab8517a675ca"),
    username: "teacher1",
    password: "123456",
    head: "a1.jpeg",
    privilege: "老师,编辑,删除",
    role: "teacher",
    campusId: 1100
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("61a822ad7f21437830315880"),
    username: "stu1",
    password: "123456",
    head: "a1.jpeg",
    privilege: "学生,编辑",
    role: "student",
    campusId: 183010
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("61a8295c42b49237afd6335a"),
    username: "stu2",
    password: "123456",
    head: "a1.jpeg",
    privilege: "学生,编辑",
    role: "student",
    campusId: 183011
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("61a8c4efb8bb3b24c806bd30"),
    username: "admin1",
    password: "123456",
    head: "1.jpeg",
    privilege: "管理,编辑",
    role: "admin",
    campusId: 101
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("61a8c500b8bb3b24c806bd32"),
    username: "admin2",
    password: "123456",
    head: "1.jpeg",
    privilege: "管理,编辑",
    role: "admin",
    campusId: 102
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("61a976a6755c2f88f54d0ab3"),
    username: "teacher2",
    password: "123456",
    head: "1.jpeg",
    privilege: "老师,编辑,删除",
    role: "teacher",
    campusId: 1101
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("61ada8813344012360f3aefd"),
    username: "stu3",
    password: "666666",
    head: "1639723320679-h6.jpg",
    privilege: "删除",
    role: "student",
    campusId: 183013
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("61ada8eb3344012360f3af00"),
    username: "stu4",
    password: "333333",
    head: "1.jpeg",
    privilege: "删除",
    role: "student",
    campusId: 183014
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("61baa51ed71c84a4feb2cc43"),
    username: "stu5",
    password: "123456",
    head: "1.jpeg",
    privilege: "删除",
    role: "student",
    campusId: 183015
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("61badca2d71c84a4feb2cc49"),
    username: "stu6",
    password: "123456",
    head: "1.jpeg",
    privilege: "编辑,删除",
    role: "student",
    campusId: 183016
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("61bc35aa120789c30c42eed1"),
    username: "stu7",
    password: "123456",
    head: "1.jpeg",
    privilege: "编辑,删除",
    role: "student",
    campusId: 183017
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("61bc57dacce6fc3070086c06"),
    username: "stu8",
    password: "123456",
    head: "1639733192545-乃琳.jpg",
    privilege: "编辑,删除",
    role: "student",
    campusId: 183018
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("62c31edeb043c963b41e2692"),
    campusId: 183012,
    password: "123456",
    username: "stu9",
    role: "student",
    privilege: "编辑,删除",
    head: "1.jpeg"
} ]);
session.commitTransaction(); session.endSession();
