import { httpRequest } from '../api/http'
export default {
    // 登陆
    loginReq: options => httpRequest({
        url: '/admin/login',
        method: 'POST',
        ...options
    }),
    // 门店信息
    getStoreInfoReq: options => httpRequest({
        url: '/storeInfo/getById',
        method: 'GET',
        ...options
    }),
    // 菜单查询
    getMenuInfoReq: options => httpRequest({
        url: '/storeMenu/getByStoreIdList',
        method: 'GET',
        ...options
    })
}