var app = getApp();
Page({

    data: {
        currentActiveIndex: 0,
        popCount: 0,
        // 接口返回的商品数组
        navList: [{
                c_id: "01",
                c_name: '电脑办公',
                list: [{
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
                list: [{
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
                list: [{
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
                list: [{
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
                c_name: '洗面奶',
                list: [{
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
                c_name: '火红',
                list: [{
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
            }
        ],
        height: '0px',
        showPop: false
    },
    //声明全局变量 MENU ==> 是否为点击左侧进行滚动的，如果是，则不需要再次设置左侧的激活状态
    initData() {
        this.proListToTop = []
        this.menuToTop = []
        this.MENU = 0
        this.windowHeight = 0
        this.timeoutId = null
    },
    onLoad: function(e) {
        this.initData()
            // 确保页面数据已经刷新完毕~
        setTimeout(() => {
            this.getAllRects()
        }, 20)
        this.getHeight()
    },
    getHeight() {
        wx.getSystemInfo({
            success: res => {
                let height = `${res.windowHeight - 100 - 20 - 50}px`
                this.setData({
                    height
                })
            }
        })
    },

    changeMenu(e) {
        // 改变左侧tab栏操作
        if (Number(e.target.id) === this.data.currentActiveIndex) return
        this.MENU = 1
        this.setData({
            currentActiveIndex: Number(e.target.id),
            rightProTop: this.proListToTop[Number(e.target.id)]
        })
        this.setMenuAnimation(Number(e.target.id))
    },
    scroll(e) {
        console.log('scrollTop', e.detail.scrollTop)
        for (let i = 0; i < this.proListToTop.length; i++) {
            if (e.detail.scrollTop < this.proListToTop[i] && i !== 0 && e.detail.scrollTop > this.proListToTop[i - 1]) {
                return this.setDis(i)
            }
        }
        console.log('MENU')
            // 找不到匹配项，默认显示第一个数据
        if (!this.MENU) {
            this.setData({
                currentActiveIndex: 0
            })
        }
        this.MENU = 0
    },
    setDis(i) {
        console.log('setDis', i)
            // 设置左侧menu栏的选中状态
        if (i !== this.data.currentActiveIndex + 1 && !this.MENU) {
            this.setData({
                currentActiveIndex: i - 1
            })
        }
        this.MENU = 0
        this.setMenuAnimation(i)
    },
    setMenuAnimation(i) {
        // 设置动画，使menu滚动到指定位置。
        let self = this
        if (this.menuToTop[i]) {
            if (this.menuToTop[i].animate) {
                // 节流操作
                if (this.timeoutId) {
                    clearTimeout(this.timeoutId)
                }
                this.timeoutId = setTimeout(() => {
                    self.setData({
                        leftMenuTop: (this.menuToTop[i].top - this.windowHeight)
                    })
                }, 50)
            } else {
                if (this.data.leftMenuTop === 0) return
                this.setData({
                    leftMenuTop: 0
                })
            }
        }
    },
    getActiveReacts() {
        wx.createSelectorQuery().selectAll('.menu-active').boundingClientRect(function(rects) {
            return rects[0].top
        }).exec()
    },
    getAllRects() {
        // 获取商品数组的位置信息
        wx.createSelectorQuery().selectAll('.pro-item').boundingClientRect(rects => {
                rects.forEach(rect => {
                    console.log(rect)
                        // 这里减去是根据你的滚动区域距离头部的高度，如果没有高度，可以将其删去
                    this.proListToTop.push(rect.top - 120)
                })
            }).exec()
            // 添加最后一个高度
        wx.createSelectorQuery().selectAll('.last').boundingClientRect(rects => {
            rects.forEach(rect => {
                console.log(rect)
                    // 这里减去是根据你的滚动区域距离头部的高度，如果没有高度，可以将其删去
                this.proListToTop.push(rect.top + rect.height)
            })
            console.log(this.proListToTop)
        }).exec()

        // 获取menu数组的位置信息
        wx.createSelectorQuery().selectAll('.menu-item').boundingClientRect(rects => {
            wx.getSystemInfo({
                success: res => {
                    this.windowHeight = res.windowHeight / 2
                    rects.forEach(rect => {
                        this.menuToTop.push({
                            top: rect.top,
                            animate: rect.top > this.windowHeight
                        })
                    })
                }
            })
        }).exec()
    },
    // 获取系统的高度信息
    // getSystemInfo() {
    //     let self = this
    //     wx.getSystemInfo({
    //         success: function(res) {
    //             windowHeight = res.windowHeight / 2
    //         }
    //     })
    // },
    // 打开选择规格
    openPop() {
        this.setData({
            showPop: true
        })
    },
    // 关闭规格弹框
    closePop() {
        this.setData({
            showPop: false
        })
    },
    // 添加
    addCount() {
        let popCount = this.data.popCount
        popCount += 1
        this.setData({
            popCount
        })
    },
    // 减少
    reduceCount() {
        let popCount = this.data.popCount
        if (popCount === 0) {
            wx.showToast({
                title: '不能再减少啦~',
                icon: 'none'
            })
            return
        }
        popCount -= 1
        this.setData({
            popCount
        })
    }
})