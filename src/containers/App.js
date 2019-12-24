import React from 'react'
import { StoreProvider } from 'store'
import Routes from 'routes'
const routes = Routes()

const App = () => {
	return <StoreProvider>{routes}</StoreProvider>
}

export default App
