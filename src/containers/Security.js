import React from 'react'
import Login from 'routes/Login'
import { useStore, observer } from 'store'

const Security = observer(({ children }) => {
	const store = useStore()
	if (!store.authenticated) {
		return <Login />
	}

	return children
})

export default Security
