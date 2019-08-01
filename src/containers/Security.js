import React from 'react'
import { observer, inject } from 'mobx-react'
import LoginView from '~/routes/Login'

const Security = inject('store')(
	observer(({ store, children }) => {
		if (!store.authenticated) {
			return <LoginView />
		}

		return children
	})
)

export default Security
