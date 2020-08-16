/**
 * @desc 文件说明：项目环境配置，主要是不同环境下请求地址、资源地址、分享配置等，开发者可自行配置
 * @const   {Object}    ENV_CONFIG              环境配置常量
 * @prop    {Object}    ENV_CONFIG.LOCAL        本地开发环境;
 * @prop    {Object}    ENV_CONFIG.PROD         线上发布环境;
 * @prop    {String}    apiRoot                 接口域名;
 * @prop    {Object}    share                   分享配置;
 * @exports {Object}    ENV_CONFIG              导出环
 */

const ENV_CONFIG = {
    LOCAL: {
        apiRoot: 'http://47.92.90.102:8080', // 测试环境接口
        share: {
            // 分享配置
        },
    },
    // 线上环境
    PROD: {
        apiRoot: 'http://47.92.90.102:8080', // 接口域名
        share: {
            // 分享配置
        },
    }
}

export default ENV_CONFIG;