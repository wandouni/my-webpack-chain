/*
 * @File: 
 * @Author: wandou 
 * @Date: 2018-09-21 09:30:15 
 * @Last Modified by: wandou
 * @Last Modified time: 2018-11-05 15:28:19
 */
import React, { Component } from 'react'
import { Row, Col } from 'antd'
import './Main.less'

class index extends Component {
  render() {
    return (
      <div className='-p-Main'>
        <Row>
          <Col>
            <h1>1. Here is some iconfont</h1>
            <i className='iconfont icon-zhuye' />
            <i className='iconfont icon-shouhu' />
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>2. 这里使用img标签引入一张图片</h1>
            <img src={require('../../images/test.png')} className='img' />
          </Col>
        </Row>
        <Row>
          <Col className='css-img-col'>
            <h1>3. 这里在css中引用一张图片</h1>
            <div className='css-img' />
          </Col>
        </Row>
      </div>
    );
  }
}

export default index;