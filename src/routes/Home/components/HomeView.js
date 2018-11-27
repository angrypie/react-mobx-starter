import React, { Component } from 'react' 
import { inject, observer } from 'mobx-react'
import { Row, Col } from 'react-flexbox-grid'

@inject('store')
@observer
class HomeView extends Component {
	render() {
		return (
			<Row middle='xs'>
				<Col xs={12} sm={5}>
					<div className='box'>
						<div className='text-box'>
							This is './routes/Home/components/HomeView.js'
						</div>
					</div>
				</Col>
				<style jsx>{`
					.box {
						display: flex;
						justify-content: center;
						padding: 1em;
					}

					.text-box {
						display: flex;
						flex-direction: column;
					}
				`}</style>
			</Row>
		)
	}
}


export default HomeView
