import Service from './../../service/service'
Page({
    data: {
        swiperImgList: [], // 轮播图片
        storeInfo: {} // 门店信息
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
            let { data } = res.data, { carouselList, closeTime, id, openTime, storeAddress, storeHotline, storeIntroduction, storeName, storeLog } = data
            let storeInfo = {
                id,
                closeTime,
                openTime,
                storeAddress,
                storeHotline,
                storeIntroduction,
                storeName,
                storeLog
            }
            this.setData({
                swiperImgList: carouselList,
                storeInfo
            })
        }).catch(err => {
            console.log(err)
        })
    },
    goMenu() {
        wx.navigateTo({
            url: `/pages/menu/menu?storeId=${this.data.storeInfo.id}`,
        })
    },
    clickBox() {
        wx.showToast({
            title: '此功能正在开发中，敬请期待哦',
            icon: 'none'
        })
    }
})