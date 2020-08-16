//获取应用实例
const app = getApp()
import Service from './../../../service/service'
Page({
    data: {
        motto: 'Hello World',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo')
    },
    onLoad: function() {
        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true
            })
        }
    },
    getUserInfo: function(e) {
        wx.login({
            success: res => {
                let data = {
                        code: res.code
                    }
                    // 发送 res.code 到后台换取 openId, sessionKey, unionId

                Service.loginReq({
                    data
                }).then(res => {
                    console.log(res)
                })
            }
        })

        // wx.getSetting({
        //     success: res => {
        //         if (res.authSetting['scope.userInfo']) {
        //             // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
        //             app.globalData.isAuthorize = true
        //             wx.getUserInfo({
        //                 success: res => {
        //                     console.log(res)
        //                     app.globalData.userInfo = res.userInfo
        //                     this.setData({
        //                         userInfo: res.userInfo,
        //                         hasUserInfo: true
        //                     })
        //                 }
        //             })
        //         } else {
        //             wx.showToast({
        //                 title: '授权登陆才可以有更多功能哦!',
        //                 icon: 'none',
        //             });
        //         }
        //     }
        // })
    },
    goHelp() {
        wx.navigateTo({
            url: '/pages/my/help/help',
        })
    },
    goNotice() {
        wx.navigateTo({
            url: '/pages/my/notice/notice',
        })
    },
    goFeedBack() {
        wx.navigateTo({
            url: '/pages/my/feedback/feedback',
        })
    },
    getPhoneNumber(e) {

    }
})