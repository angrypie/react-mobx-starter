import React from 'react'
import { Route } from 'wouter'

import CoreLayout from 'layouts/CoreLayout'
import Home from './Home'
import Login from './Login'

export const LayoutRoute = ({ layout: Layout, ...rest }) => (
	<Layout>
		<Route path={'/'} exact component={Home} />
		<Route path={'/login'} exact component={Login} />
	</Layout>
)

export const createRoutes = () => <LayoutRoute layout={CoreLayout} />

export default createRoutes
