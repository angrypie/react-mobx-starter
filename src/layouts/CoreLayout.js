import React from 'react'
import Header from '../components/Header'
import Security from '../containers/Security'
import { Grid } from 'react-flexbox-grid'

const CoreLayout = ({ path, children }) => <Security>
	<Grid>
		<Header />
		{children}
		<style jsx>{`
		`}</style>

		<style jsx global={true.toSTring()}>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system,BlinkMacSystemFont,Avenir Next,Avenir,Helvetica,sans-serif;
				font-size: .85em;
      }
		`}</style>

	</Grid>
</Security>


export default CoreLayout

