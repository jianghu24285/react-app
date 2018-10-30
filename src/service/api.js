/* 
 * @Desc: api接口地址
 * @Author: Eleven 
 * @Date: 2018-10-30 17:02:17 
 * @Last Modified by: Eleven
 * @Last Modified time: 2018-10-30 17:15:03
 */

// 是否开发环境
const isDev = process.env.BUILD_ENV === 'development' ? true : false
// 开发环境,url统一添加前缀,方便接口本地代理
const prev = isDev ? '/api' : ''
 
// 用户信息
export const USER_INFO = prev + '/user_info'