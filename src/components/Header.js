import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import {  Row, Col } from 'react-flexbox-grid'

class Header extends Component {
	componentWillMount() {
	}
	render() {
		const { match } = this.props
		console.log(match)
		return (
			<Row middle='xs'>
				<Col xs={12}>
					<Nav />
				</Col>
			</Row>
		)
	}
}

const links = [
	{ href: '/login', label: 'Login Page' },
].map(link => {
  return link
})

const linkStyle = {
	color: '#555',
	textDecoration: 'none',
	fontSize: '13px',
}

const Nav = () => (
  <nav>
    <div className='links'>
			<div className='links-group'>
        <Link to='/' className='link' style={linkStyle}>
					Home
        </Link>
			</div>
			<div className='links-group'>
        {links.map(
          ({ href, label }, i) => (
            <div key={i}>
              <Link to={href} style={linkStyle}>
                {label}
              </Link>
            </div>
          )
        )}
			</div>
    </div>

    <style jsx>{`

			nav {
				height: 5em;
				display: flex;
				align-items: center;
			}

      .links {
        display: flex;
        justify-content: space-between;
				flex: 1;
      }

      .links-group {
        display: flex;
      }

			.links-group > div {
				padding: 0 1em;
			}

    `}</style>
  </nav>
)

export default withRouter(Header)
