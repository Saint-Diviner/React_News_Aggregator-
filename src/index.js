import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Home } from './pages'
import {Provider} from 'react-redux'
import store from './stores'

/* The Elements components is a summary of basic presentation componets
 * available for use in this theme
 */

class Example extends Component {
    render(){
        return (
            <Provider store={store.configure(null)}> 
                <Home />
            </Provider>
        )
    }
}

ReactDOM.render(<Example />, document.getElementById('root'))