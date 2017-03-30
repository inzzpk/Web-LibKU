import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { Link } from 'react-router';

class Navbar extends Component {


	render() {
		return (
			<nav className="navbar navbar-default">
				<div className="container">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle">
						 <span className="icon-bar"></span>
						 <span className="icon-bar"></span>
						 <span className="icon-bar"></span>
						</button>
						<Link to='' className="navbar-brand">
							<span>Lib KU</span>
							<small className="hidden-xs"> Admin</small>
						</Link>
					</div>
					<div className="collapse navbar-collapse">
						<ul className="nav navbar-nav navbar-right">
						</ul>
					</div>
				</div>
			</nav>
		)
	}
}

export default Navbar;