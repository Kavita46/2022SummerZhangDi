import axios from '../axios'
import { BOOKS } from '../const.js'


// BUG export default 不能用解构

// 1-查询
function getBooks(data) {
    return axios({
        url: `/${BOOKS}/getBooks`,
        method: 'get',
        params:data
    })
}
// 2-分页可搜索查询
function getBooksByPages(data){
    return axios({
        url: `/${BOOKS}/getBooksByPages`,
        method: 'get',
        params:  {
            pageIndex: data.pageIndex,
            pageSize: data.pageSize,
            k: data.k
        }
    })
}

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

// function editClass(data) {
//     console.log('data需要传入 const {_id, cname} = req.body; ');
//     console.log('data = ' + data);
//     return axios({
//         url: `/${CLASSES}/editClass`,
//         type: 'post',
//         data: data

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
    getBooks,
    getBooksByPages
}