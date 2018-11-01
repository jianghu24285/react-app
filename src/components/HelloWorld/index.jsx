import React, { Component } from 'react'
import { Toast } from 'antd-mobile'
import service from 'service'

import style from './style'

export default class index extends Component {
  componentDidMount() {
    this.fetchTest()
  }

  alert() {
    Toast.info('你好, 123知识狂欢节 !')
  }

  fetchTest = async () => {
    const res = await service.test()
    console.log(res, '测试接口')
  }
  
  render() {
    const { alert } = this
    
    return (
      <div 
        className={style.test}
        onClick={alert}
      >
        你好, 123知识狂欢节 !
      </div>
    )
  }
}
