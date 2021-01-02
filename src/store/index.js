import React from 'react'
import { useLocalObservable } from 'mobx-react-lite'
export { observer } from 'mobx-react-lite'

export function createStore() {
	return {
		authenticated: true,
		login() {
			this.authenticated = true
		},

		logout() {
			this.authenticated = false
			console.log('auth', this.authenticated)
		},
	}
}

const storeContext = React.createContext(null)

export const StoreProvider = ({ children }) => {
	const store = useLocalObservable(createStore)
	return <storeContext.Provider value={store}>{children}</storeContext.Provider>
}

export const useStore = () => {
	const store = React.useContext(storeContext)
	if (!store) {
		// this is especially useful in TypeScript so you don't need to be checking for null all the time
		throw new Error('You have forgot to use StoreProvider, shame on you.')
	}
	return store
}
