import React from 'react'
import { useStore, observer } from '~/store'

const Login = observer(() => {
	const store = useStore()
	const { authenticated, login, logout } = store
	const statement = `You are ${authenticated ? '' : 'not'} logged in`

	const loginButton = () => (authenticated ? logout() : login())
	return (
		<div>
			<p>This is './routes/Home/components/LoginView.js'</p>
			<div>{statement}</div>
			<code>
				See <b>authenticated</b> property in application state: ./store/index.js
			</code>
			<br />
			<button onClick={loginButton}>
				{authenticated ? 'Logout' : 'Login'}
			</button>
		</div>
	)
})

export default Login
