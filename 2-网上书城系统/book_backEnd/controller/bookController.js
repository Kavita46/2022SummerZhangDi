const bookModel = require("../models/bookModel")

// 1-查询所有书籍函数
async function getBooks(req, res, next) {
    const result = await bookModel.find();
    res.send({ result });
}

// 2-删除单个书籍函数
// async function deleteBook(req, res, next) {
//     // Promise MongoDB操作数据库 是异步操作,用await等待, await又需要用async
//     const result = await studentModel.findOneAndUpdate({ _id: req.body._id }, { flag: 0 }, { new: true });
//     res.send({ result });
// }
// 4-通过Id查询
// async function getById(req, res, next) {
//     const { sid } = req.query;
//     const result = await studentModel.findOne(req.query);
//     res.send({ result });
// }

// BUG 5-分页带搜索
async function getBooksByPages(req, res, next) {
    // pageIndex:页的索引, pageSize:页的大小,k:搜索关键词
    console.log('query是')
    console.log(req.query)
    let { pageIndex, pageSize, k } = req.query;
    pageSize = Number.parseInt(pageSize);
    pageIndex = Number.parseInt(pageIndex);
    // 如果k不为undefined,则查询再分页
    console.log('k的类型')
    console.log(typeof (k))
    if (typeof(k)!=undefined) {
        console.log("k的值是" + k);
        console.log('k的长度是' + k.length);
        console.log('k的类型是' + typeof (k));
    } else {
        console.log('参数没有k')
    }

    if (k != '') {
        // k有搜索值
        let regExp = new RegExp(k);
        // flag: 1,  做逻辑删除

        // 总的搜索结果
        let totalResult = await bookModel.find({ title: { $regex: regExp } });
        let count = totalResult.length;
        // 分页后的的搜索结果

        let skipcount = (pageIndex - 1) * pageSize;
        console.log('skip是')

        console.log(skipcount)

        console.log('index' + pageIndex)
        console.log('size' + pageSize)

        let result = await bookModel.find({ delete:0,title: {  $regex: regExp } }, {}, { skip: (pageIndex - 1) * pageSize, limit: pageSize })
        let pageCount = Math.ceil(count / pageSize);
        res.send({
            result,
            pageIndex,
            pageCount,
            pageSize,
            count
        })
    } else {
        // k没搜索值
        let result = await bookModel.find(  {delete:0},{}, {skip: (pageIndex - 1) * pageSize, limit: pageSize })
        let totalResult = await bookModel.find();
        let count = totalResult.length;
        console.log('count' + count);
        let pageCount = Math.ceil(count / pageSize);
        console.log('pageCount' + pageCount)

        res.send({
            result,
            pageIndex,
            pageCount,
            pageSize,
            count
        })
    }
    // const result = await studentModel.find({ sname: { $regex: regExp }, flag: 1 }).populate("cla_id");
    // res.send({ result })
    // 如果k为undefined,则直接分页
    // let count = await studentModel.find().countDocuments({ flag: 1 , sname: { $regex: regExp }});
    //     let result = await studentModel.find({ flag: 1, sname: { $regex: regExp } }, {}, { skip: (pageIndex - 1) * pageSize, limit: pageSize }).populate("cla_id");
    // let count = result.length;
    // let pageCount = Math.ceil(count / pageSize);
    // const pageIndex = 1;
    // // const{pageIndex} = req.query
    // const pageSize  = 5;


}



module.exports = {

    getBooks,
    getBooksByPages
};
