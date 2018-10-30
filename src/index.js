import '@babel/polyfill'
import React, { Component } from 'react'
import reactDom from 'react-dom'
import Main from './pages/Main'
class App extends Component {
    render() {
        return (
            <div>
                <Main />
            </div >
        );
    }
}

reactDom.render(<App />, document.getElementById('app'))