import React, { Component } from 'react'
import { Provider, observer } from 'mobx-react'

@observer
class App extends Component {
	render() {
		let { store, routes } = this.props
		return <Provider store={store}>{routes}</Provider>
	}
}

export default App
