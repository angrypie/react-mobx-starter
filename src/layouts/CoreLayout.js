import React from 'react'
import Header from '~/components/Header'
import Security from '~/containers/Security'

const CoreLayout = ({ children }) => (
	<Security>
		<div className='layout'>
			<Header />
			<div className='content-container'>{children}</div>
			<style jsx>{``}</style>

			<style jsx>{`
				.layout {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.content-container {
					max-width: 1000px;
					width: 100%;
				}
			`}</style>

			<style jsx global={true.toString()}>{`
				:global(body) {
					margin: 0;
					font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
						Helvetica, sans-serif;
					font-size: 0.85em;
				}
			`}</style>
		</div>
	</Security>
)

export default CoreLayout
