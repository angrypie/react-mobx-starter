import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'

class Header extends Component {
	render() {
		return <Nav />
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
				height: 4em;
				display: flex;
				align-items: center;
				flex: 1;
				width: 100%;
				max-width: 1000px;
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
