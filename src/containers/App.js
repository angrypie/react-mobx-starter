import React, { Component } from 'react'
import { Provider, observer } from 'mobx-react'

import {
	BrowserRouter as Router,
} from 'react-router-dom'


@observer
class App extends Component {

  render() {
		let { store, routes } = this.props
    return (
				<Provider store={ store }>
					<Router>
						{ routes }
					</Router>
				</Provider>
    )
  }
}


export default App;
