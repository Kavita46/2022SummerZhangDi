import axios from '../axios'
import { ORDERS} from '../const.js'


// BUG export default 不能用解构

// 1-查询


function getOrders(data) {
    return axios({
        url: `/${ORDERS}/getOrders`,
        method: 'get',
        params: data
    })
}

export default {
    getOrders
}