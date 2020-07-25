Page({
    data: {
        tempFilePaths: '',
        count: 0,
        textarea: '',
        phone: ''
    },
    uploadImg() {
        wx.chooseImage({
            count: 1,

            success: (res) => {
                console.log(res)
                const tempFilePaths = res.tempFilePaths[0]
                this.setData({
                        tempFilePaths
                    })
                    // wx.uploadFile({
                    //     url: 'https://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
                    //     filePath: tempFilePaths[0],
                    //     name: 'file',
                    //     formData: {
                    //         'user': 'test'
                    //     },
                    //     success(res) {
                    //         const data = res.data
                    //             //do something
                    //     }
                    // })
            }
        })
    },
    // 输入文字
    bindKeyTextArea(e) {
        this.setData({
            count: e.detail.cursor,
            textarea: e.detail.value
        })
    },
    // 输入手机号
    binaKeyInput(e) {
        this.setData({
            phone: e.detail.value
        })
    },
    commit() {
        if (!this.data.textarea) {
            wx.showToast({
                title: '请详述您的问题，以便我们为您提供更好的帮助',
                icon: 'none'
            })
            return
        }
        if (!/^1(3|4|5|7|8)\d{9}$/.test(this.data.phone) || !this.data.phone) {
            wx.showToast({
                title: '你输入的电话不符，请重新检查填写',
                icon: 'none'
            })
            return
        }
    }
})