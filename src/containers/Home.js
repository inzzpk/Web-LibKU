import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Button } from 'react-bootstrap'
import * as actions from 'actions'

const { getTest } = actions

class Home extends Component {
	render(){
		return (
			<div>
				<div className="content">
				<h1>Home</h1>
					{ 
						JSON.stringify(this.props.test)
					}
				</div>
				<Button bsStyle="danger" bsSize="large" onClick={this.props.getTest}>
					Load
				</Button>
				<br />
				<Link to='/about'>
					<Button bsStyle="success" bsSize="large">button</Button>
				</Link>
				<br />
				<Link to='/intro'>
					<Button bsStyle="success" bsSize="large">Intro</Button>
				</Link>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	test: state.test.get.data
})

const mapDispatchToProps = (dispatch) => ({
	getTest(){
		dispatch(getTest())
	}
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home)
