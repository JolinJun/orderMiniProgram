import Service from './../../service/service'
Page({
    data: {

    },
    onLoad() {
        this.getStoreInfo()
    },
    getStoreInfo() {
        let params = {
            id: 1
        }
        Service.getStoreInfoReq({
            data: params,
            isPromise: true
        }).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    },
    goMenu() {
        wx.navigateTo({
            url: '/pages/menu/menu',
        })
    },
    clickBox() {
        wx.showToast({
            title: '此功能正在开发中，敬请期待哦',
            icon: 'none'
        })
    }
})