import 'babel-polyfill'
import React, { Component } from 'react';
import reactDom from 'react-dom'

class App extends Component {
    render() {
        return (
            <div>
                this is a App test!
            </div>
        );
    }
}

reactDom.render(<App />, document.getElementById('app'))