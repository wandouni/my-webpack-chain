/*
 * @File: 
 * @Author: wandou 
 * @Date: 2018-09-21 09:30:15 
 * @Last Modified by: wandou
 * @Last Modified time: 2018-09-21 14:55:20
 */
import { Icon, Menu } from 'antd';
import React, { Component } from 'react';
import { Button } from 'antd';

class index extends Component {
  state = {
    current: 'mail',
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render() {
    return (
      <div>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item key="mail">
            <Icon type="mail" />1
        </Menu.Item>
          <Menu.Item key="app">
            <Icon type="appstore" />2
        </Menu.Item>
          <Menu.Item key="service">
            <Icon type="customer-service" />3
        </Menu.Item>
          <Menu.Item key="compass">
            <Icon type="compass" />4
          </Menu.Item>
        </Menu>
        <div style={{ padding: '12px 6px' }}>
          <Button type='primary' onClick={() => {
            import('./print').then(module => {
              console.log(module)
              var print = module.default
              print()
            })
          }}>点击查看懒加载效果</Button>
        </div>
      </div>
    );
  }
}

export default index;