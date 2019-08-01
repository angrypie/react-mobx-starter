import React, { Component } from 'react'

class HomeView extends Component {
	render() {
		return (
			<div className='container'>
				<p>This is './routes/Home/components/HomeView.js'</p>
				<div className='box'></div>
				<style jsx>{`
					.box {
						padding: 1em;
					}
				`}</style>
			</div>
		)
	}
}

export default HomeView
