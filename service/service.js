import { httpRequest } from '../api/http'
export default {
    // 门店信息
    getStoreInfoReq: options => httpRequest({
        url: '/storeInfo/getById',
        method: 'GET',
        ...options
    }),
}