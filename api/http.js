/**
 * @desc 文件说明：用户系统信息
 * @external apiRoot                接口域名地址
 * @func httpRequest                小程序http请求方法
 * @exports httpRequest             导出小程序http请求方法
 */

import { apiRoot, version } from '../config/config';
/**
 * @desc 小程序请求模块
 * @param  {String} url                 这里传入的是接口路径, 必填
 * @param  {Func}   success             请求成功回调，选填
 * @param  {Func}   fail                请求失败回调，选填
 * @param  {Object} options             包含其他参数属性的对象，选填
 * @prop   {String} options.method      请求类型，必须大写，选填，默认为GET
 * @prop   {String} options.dataType    接受参数类型，选填，默认为json
 * @prop   {Object} options.header      请求头设置，选填，默认为application/x-www-form-urlencoded
 * @return {}
 */
export const wxRequest = ({ url, isPromise = true, resolve, reject, success = f => f, fail, lose, failCustom = false, loseCustom = false, hideLoading = false, ...options }) => {
    const app = getApp()
    if (!hideLoading) {
        wx.showLoading({
            title: "拼命加载中...",
            mask: true
        })
    }
    // ...loading开启
    const header = {
        "content-type": "application/json",
        "Jwt-Token": app && app.globalData.jwtToken,
        "version": version
    }
    url = `${apiRoot}${url}`
    wx.request({
        url,
        method: 'GET',
        dataType: 'json',
        header: header,
        success: res => {
            // ...loading关闭
            if (!hideLoading) {
                wx.hideLoading();
            }
            // 这里会先对微信服务返回数据做处理，通过statusCode做分支处理
            if (res.statusCode === 200) {
                // 这里才对业务服务返回数据处理
                const { retCode } = res.data;
                if (retCode === 200) {
                    // 更新jwtToken
                    if (res.header['jwt-token'] || res.header['Jwt-Token'] || res.header["JWT-TOKEN"]) {
                        app.globalData.jwtToken = res.header['jwt-token'] || res.header['Jwt-Token'] || res.header["JWT-TOKEN"];
                    }
                    isPromise ? resolve(res) : success(res);
                } else if (retCode === 1002) {
                    // 用户退出登录，回到首页
                    wx.reLaunch({
                        url: "/pages/index/index"
                    })
                } else {
                    // 不支持promise且接口报错
                    if (!isPromise && fail && typeof fail === 'function') {
                        fail(res.data);
                        return
                    }
                    // 支持promise且接口报错自定义处理
                    if (isPromise && failCustom) {
                        let err = {}
                        err.type = 'fail'
                        err.data = res
                        reject(err)
                        return
                    }
                    //接口返回不是200，默认处理状态
                    wx.showModal({
                        title: '',
                        content: res.data.msg || '网络错误',
                        showCancel: false,
                        confirmText: '确定',
                        confirmColor: "#FD5E02"
                    });
                }
            } else if (res.statusCode === 401) {
                // 登陆过期
                wx.showModal({
                    title: '',
                    content: '登陆已过期，请刷新重试',
                    confirmText: '确定',
                    confirmColor: "#FD5E02",
                    success: function(res) {
                        if (res.confirm) {
                            wx.reLaunch({
                                url: "/pages/index/index"
                            })
                        }
                    }
                })
            } else {
                // 不支持promise且接口报错
                if (!isPromise && lose && typeof lose === 'function') {
                    lose(res);
                    return
                }
                // 支持promise且接口报错自定义处理
                if (isPromise && loseCustom) {
                    let err = new Error();
                    err.type = 'lose'
                    err.data = res
                    reject(err);
                    return
                }
                // 默认处理
                wx.showModal({
                    title: '',
                    content: '网络异常，请检查网络后重试',
                    confirmText: '确定',
                    confirmColor: "#FD5E02",
                    cancelColor: '#9B9B9B',
                    success: (res) => {
                        if (res.confirm) {
                            wxRequest({ url, isPromise, resolve, reject, success, fail, lose, failCustom, loseCustom, hideLoading, ...options })
                        }
                    }
                });
            }
        },
        fail: error => {
            // 调用组件提示请求失败
            wx.hideLoading();

            // 不支持promise且接口调用失败
            if (!isPromise && lose && typeof lose === 'function') {
                lose(error);
                return
            }
            // 支持promise且接口调用失败自定义处理
            if (isPromise && loseCustom) {
                let err = new Error();
                err.type = 'lose'
                err.data = error
                reject(err);
                return
            }
            // 默认处理
            wx.showModal({
                title: '',
                content: '网络不稳定，请重试',
                confirmText: '确定',
                confirmColor: "#FD5E02",
                cancelColor: '#9B9B9B',
                success: (res) => {
                    if (res.confirm) {
                        wxRequest({ url, isPromise, resolve, reject, success, fail, lose, failCustom, loseCustom, hideLoading, ...options })
                    }
                }
            });

        },
        ...options,
    })
}

export const httpRequest = ({ url, isPromise = true, success = f => f, fail, lose, failCustom = false, loseCustom = false, hideLoading = false, ...options }) => {
    return new Promise((resolve, reject) => {
        wxRequest({ url, success, fail, resolve, reject, lose, failCustom, loseCustom, isPromise, hideLoading, ...options })
    })
}