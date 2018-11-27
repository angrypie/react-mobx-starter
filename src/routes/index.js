import CoreLayout from '../layouts/CoreLayout'
import Home from './Home'
import Login from './Login'

import React from 'react'
import { Route } from 'react-router-dom'

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
	<div>
		<LayoutRoute path='/' layout={CoreLayout} />
	</div>
)


export default createRoutes
