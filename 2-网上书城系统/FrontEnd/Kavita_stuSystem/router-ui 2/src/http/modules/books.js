import axios from '../axios'
import { BOOKS } from '../const.js'
// BUG export default 不能用解构

// 1-查询
function getBooksByPages(data) {
    return axios({
        url: `/${BOOKS}/getBooksByPages`,
        method: 'get',
        params: {
            pageIndex: data.pageIndex,
            pageSize: data.pageSize
        }
    })
}

// 2-新增
function addBook(data) {
    console.log('传入的data是 ' );
    console.log(data)
    console.log(typeof(data))
    console.log(JSON.stringify(data))
    return axios({
        url: `/${BOOKS}/addBook`,
        method: 'post',
        data:JSON.stringify(data)
        // {
            // bookid: data.bookid,
            // title: data.title,
            // pic1: data.pic1,
            // describle: data.describle,
            // author: data.author,
            // press: data.press,
            // publishdate: data.publishdate,
            // unitprice: data.unitprice,
            // rating: data.rating,
            // commentnum: data.commentnum,
            // tag: data.tag,

        // }

    })
}

// 5-修改
function editBook(data){
    console.log('传进来的data是')
    console.log(data)
    console.log(typeof(data))
    return axios({
        url: `/${BOOKS}/editBook`,
        method: 'post',
        data:data
        // data: {
        //     bookid: data.bookid,
        //     title: data.title,
        //     pic1: data.pic1,
        //     describle: data.describle,
        //     author: data.author,
        //     press: data.press,
        //     publishdate: data.publishdate,
        //     unitprice: data.unitprice,
        //     rating: data.rating,
        //     commentnum: data.commentnum,
        //     tag: data.tag,
        // }
    })

}

// 3- 通过ID 查找
function searchBook(data) {

    return axios({
        url: `/${BOOKS}/searchBook`,
        method: 'get',
        params: {
            title: data.title
        }
    })
}

// 4-删除
function deleteBook(data) {
    return axios({
        url: `/${BOOKS}/deleteBook`,
        method: 'get',
        params: {
            bookid: data
        }
    })
}



// 2-分页可搜索查询
// function getBooksByPages(data){
//     return axios({
//         url: `/${BOOKS}/getBooksByPages`,
//         method: 'get',
//         params:  {
//             pageIndex: data.pageIndex,
//             pageSize: data.pageSize,
//             k: data.k
//         }
//     })
// }

// function searchBooks(data){
//     return axios({
//         url: `/${BOOKS}/searchBooks`,
//         method: 'get',
//         params:  {
//             pageIndex: data.pageIndex,
//             pageSize: data.pageSize,
//             k: data.k
//         }
//     })

// }

// function getClasses(data) {
//     return axios({
//         // http://localhost:7777/classes/getClasses
//         url: 'http://localhost:7777/classes/getClasses',
//         method: 'get',
//         params: data

//     })
// }


// function addClass(data) {
//     console.log(data)
//     return axios({
//         // url:'http://localhost:7777/classes/addClass'
//         url: 'http://localhost:7777/classes/addClass',
//         method:'post',
//         data: data
//     })
// }

export default {
    getBooksByPages,
    addBook, 
    deleteBook,
     searchBook,
     editBook
}