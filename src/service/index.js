/* 
 * @Desc: 接口调用封装
    返回的是promise对象
 * @Author: Eleven 
 * @Date: 2018-10-30 15:36:04 
 * @Last Modified by: Eleven
 * @Last Modified time: 2018-11-01 09:45:28
 */

import $ajax from './ajax'
import api from './api'

const service = {
  // 测试接口
  test() {
    return $ajax.get(api.TEST)
  }
}

export default service