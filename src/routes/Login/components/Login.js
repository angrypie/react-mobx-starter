import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

@inject('store')
@observer
class LoginView extends Component {
	loginButton() {
		const { store } = this.props
		store.authenticated ? store.logout() : store.login()
	}

	render() {
		const { authenticated } = this.props.store
		const statement = `You are ${authenticated ? '' : 'not'} logged in`
		return (
			<div>
				<p>This is './routes/Home/components/LoginView.js'</p>
				<div>{statement}</div>
				<code>
					See <b>authenticated</b> property in application state:
					./store/index.js
				</code>
				<br />
				<button onClick={this.loginButton.bind(this)}>
					{authenticated ? 'Logout' : 'Login'}
				</button>
			</div>
		)
	}
}

export default LoginView
