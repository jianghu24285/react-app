/* 
 * @Desc: api接口地址
 * @Author: Eleven 
 * @Date: 2018-10-30 17:02:17 
 * @Last Modified by: Eleven
 * @Last Modified time: 2018-10-31 17:38:30
 */

import { isDev } from 'utils'

// 开发环境,url统一添加前缀,方便接口本地代理
const prev = isDev ? '/api' : ''

const api = {
  // test接口
  TEST: prev + '/activities/welfare/test/json',
  
}

export default api