import React from 'react'
import { Route } from 'react-router-dom'

import CoreLayout from '../layouts/CoreLayout'
import Home from './Home'
import Login from './Login'

export const LayoutRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route {...rest} render={ ({ match }) => {
		const { path } = match
		return (
			<Layout path={path} >
				<Route path={path} exact component={Home} />
				<Route path={'/login'} exact component={Login} />
			</Layout>
		)
	}}/>
)


export const createRoutes = () => (
	<LayoutRoute path='/' layout={CoreLayout} />
)


export default createRoutes
