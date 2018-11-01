import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'mobx-react'
import { hot } from 'react-hot-loader'
import store from 'store'

// 公共样式
import 'assets/style/index'

import Router from 'router'


class App extends Component {
  render() {
    return (
      <Provider {...store}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default hot(module)(App);
