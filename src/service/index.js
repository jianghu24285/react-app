/* 
 * @Desc: 接口调用封装
 * @Author: Eleven 
 * @Date: 2018-10-30 15:36:04 
 * @Last Modified by: Eleven
 * @Last Modified time: 2018-10-30 17:16:39
 */

import $http from './http'

// api接口地址
import {
  USER_INFO
} from './api'

/**
 * 获取用户信息
 */
export const getUserInfo = () => {
  return $http.get(USER_INFO)
}