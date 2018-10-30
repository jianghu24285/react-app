import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'mobx-react'
import store from 'store'

// 公共样式
import 'assets/style/index'

import HelloWorld from 'components/HelloWorld'

class App extends Component {
  render() {
    return (
      <Provider {...store}>
        <BrowserRouter>
          <HelloWorld />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
