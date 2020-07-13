var app = getApp();
//声明全局变量
let proListToTop = [], menuToTop = [], MENU = 0, windowHeight, timeoutId;
// MENU ==> 是否为点击左侧进行滚动的，如果是，则不需要再次设置左侧的激活状态
Page({

    data: {
        currentActiveIndex: 0,
        // 接口返回的商品数组
        navList: [
            {
                c_id: "01",
                c_name: '电脑办公',
                list: [
                    {
                        id: 1,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                    {
                        id: 2,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                    {
                        id: 3,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                    {
                        id: 4,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                    {
                        id: 5,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                ]
            },
            {
                c_id: "02",
                c_name: '祛痘',
                list: [
                    {
                        id: 1,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                    {
                        id: 2,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                    {
                        id: 3,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                    {
                        id: 4,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                    {
                        id: 5,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                ]
            },
            {
                c_id: "02",
                c_name: '化妆品',
                list: [
                    {
                        id: 1,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                    {
                        id: 2,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                    {
                        id: 3,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                    {
                        id: 4,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                    {
                        id: 5,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                ]
            },
            {
                c_id: "03",
                c_name: '口红',
                list: [
                    {
                        id: 1,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                    {
                        id: 2,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                    {
                        id: 3,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                    {
                        id: 4,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                    {
                        id: 5,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                ]
            },
            {
                c_id: "04",
                c_name: '包包',
                list: [
                    {
                        id: 1,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                    {
                        id: 2,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                    {
                        id: 3,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                    {
                        id: 4,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                    {
                        id: 5,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                ]
            },
            {
                c_id: "05",
                c_name: '面膜',
                list: [
                    {
                        id: 1,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                    {
                        id: 2,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                    {
                        id: 3,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                    {
                        id: 4,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                    {
                        id: 5,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                ]
            },
            {
                c_id: "06",
                c_name: '精华乳',
                list: [
                    {
                        id: 1,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                    {
                        id: 2,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                    {
                        id: 3,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                    {
                        id: 4,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                    {
                        id: 5,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                ]
            },
            {
                c_id: "07",
                c_name: '洁面乳',
                list: [
                    {
                        id: 1,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                    {
                        id: 2,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                    {
                        id: 3,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                    {
                        id: 4,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                    {
                        id: 5,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                ]
            },
            {
                c_id: "08",
                c_name: '洁面乳',
                list: [
                    {
                        id: 1,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                    {
                        id: 2,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                    {
                        id: 3,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                    {
                        id: 4,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                    {
                        id: 5,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                ]
            },
            {
                c_id: "09",
                c_name: '洁面乳',
                list: [
                    {
                        id: 1,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                    {
                        id: 2,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                    {
                        id: 3,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                    {
                        id: 4,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                    {
                        id: 5,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                ]
            },
            {
                c_id: "10",
                c_name: '洁面乳',
                list: [
                    {
                        id: 1,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                    {
                        id: 2,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                    {
                        id: 3,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                    {
                        id: 4,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                    {
                        id: 5,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                ]
            },
            {
                c_id: "11",
                c_name: '洁面乳',
                list: [
                    {
                        id: 1,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                    {
                        id: 2,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                    {
                        id: 3,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                    {
                        id: 4,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                    {
                        id: 5,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                ]
            },
            {
                c_id: "12",
                c_name: '洁面乳',
                list: [
                    {
                        id: 1,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                    {
                        id: 2,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                    {
                        id: 3,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                    {
                        id: 4,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                    {
                        id: 5,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                ]
            },
            {
                c_id: "13",
                c_name: '洁面乳',
                list: [
                    {
                        id: 1,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                    {
                        id: 2,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                    {
                        id: 3,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                    {
                        id: 4,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                    {
                        id: 5,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                ]
            },
            {
                c_id: "14",
                c_name: '洁面乳',
                list: [
                    {
                        id: 1,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                    {
                        id: 2,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                    {
                        id: 3,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                    {
                        id: 4,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                    {
                        id: 5,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                ]
            },
            {
                c_id: "07",
                c_name: '洁面乳',
                list: [
                    {
                        id: 1,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                    {
                        id: 2,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                    {
                        id: 3,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                    {
                        id: 4,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                    {
                        id: 5,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                ]
            },
            {
                c_id: "07",
                c_name: '洁面乳',
                list: [
                    {
                        id: 1,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                    {
                        id: 2,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                    {
                        id: 3,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                    {
                        id: 4,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                    {
                        id: 5,
                        url: 'https://resource.yirenheju.cn/wechat/index/err.png',
                        goodsName: '玩具',
                    },
                ]
            },
        ],




    },
    onLoad: function (e) {




        // 确保页面数据已经刷新完毕~
        setTimeout(() => {
            this.getAllRects()
        }, 20)




    },

    changeMenu(e) {
        console.log(proListToTop);
        // 改变左侧tab栏操作
        if (Number(e.target.id) === this.data.currentActiveIndex) return
        MENU = 1
        this.setData({
            currentActiveIndex: Number(e.target.id),
            rightProTop: proListToTop[Number(e.target.id)]
        })
        this.setMenuAnimation(Number(e.target.id))
    },
    scroll(e) {
        console.log(e);
        for (let i = 0; i < proListToTop.length; i++) {
            if (e.detail.scrollTop < proListToTop[i] && i !== 0 && e.detail.scrollTop > proListToTop[i - 1]) {
                return this.setDis(i)
            }
        }
        // 找不到匹配项，默认显示第一个数据
        if (!MENU) {
            this.setData({
                currentActiveIndex: 0
            })
        }
        MENU = 0
    },
    setDis(i) {
        // 设置左侧menu栏的选中状态
        if (i !== this.data.currentActiveIndex + 1 && !MENU) {
            this.setData({
                currentActiveIndex: i - 1
            })
        }
        MENU = 0
        this.setMenuAnimation(i)
    },
    setMenuAnimation(i) {
        // 设置动画，使menu滚动到指定位置。
        let self = this
        console.log(33)
        if (menuToTop[i].animate) {
            console.log(11111)
            // 节流操作
            if (timeoutId) {
                clearTimeout(timeoutId)
            }
            timeoutId = setTimeout(() => {
                console.log(12138)
                self.setData({
                    leftMenuTop: (menuToTop[i].top - windowHeight)
                })
            }, 50)
        } else {
            console.log(11)
            if (this.data.leftMenuTop === 0) return
            console.log(22)
            this.setData({
                leftMenuTop: 0
            })
        }
    },
    getActiveReacts() {
        wx.createSelectorQuery().selectAll('.menu-active').boundingClientRect(function (rects) {
            return rects[0].top
        }).exec()
    },
    getAllRects() {




        // 获取商品数组的位置信息
        wx.createSelectorQuery().selectAll('.pro-item').boundingClientRect(function (rects) {
            rects.forEach(function (rect) {
                console.log(rect)
                // 这里减去44是根据你的滚动区域距离头部的高度，如果没有高度，可以将其删去
                proListToTop.push(rect.top - 44)
            })
        }).exec()




        // 获取menu数组的位置信息
        wx.createSelectorQuery().selectAll('.menu-item').boundingClientRect(function (rects) {
            wx.getSystemInfo({
                success: function (res) {
                    console.log(res);
                    windowHeight = res.windowHeight / 2
                    // console.log(windowHeight)
                    rects.forEach(function (rect) {
                        menuToTop.push({
                            top: rect.top,
                            animate: rect.top > windowHeight
                        })
                    })
                }
            })
        }).exec()
    },
    // 获取系统的高度信息
    getSystemInfo() {
        let self = this
        wx.getSystemInfo({
            success: function (res) {
                windowHeight = res.windowHeight / 2
            }
        })
    }

})