import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
//import actions from '../../actions'
import { reduxForm } from 'redux-form'
import { LinkContainer } from 'react-router-bootstrap'

class Header extends Component {

	constructor(props, contexts){
	    super(props, contexts)
	    this.state = {
	      key: 1
	    }
  	}

	handleSelect(eventKey) {
		event.preventDefault()
		this.setState({ key: eventKey })
	}

	render() {
		return (
	    <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Nav bsStyle="tabs" className="nav-classroom" activeKey={this.state.key} onSelect={this.handleSelect.bind(this)}>
              <LinkContainer to="/newslist"><NavItem eventKey={1} >ประชาสัมพันธ์</NavItem></LinkContainer>
              <LinkContainer to="/introlist"><NavItem eventKey={2} >แนะนำหนังสือ</NavItem></LinkContainer>
    		</Nav>
          </div>
        </div>
      </div>
		)
	}
}

export default Header;