import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Button } from 'react-bootstrap'
import * as actions from 'actions'

const { getTest } = actions

class Home extends Component {

	getData(){
		return Object.keys(this.props.test).map(key => this.props.test[key])
	}
	
	render(){
		return (
			<div>
				<div className="content">
				<h1>Home</h1>
				<div>
				<table className="table table-striped">
      				<thead>
			
			        {this.getData().map(data => 
			        	<tr key={data.id}>
			        	  <td>{data.id}</td>
                          <td>{data.tittle}</td>
                          <td>{data.author}</td>
                        </tr>
			        )}
			  		</thead>
			  	</table>
			  	</div>
				</div>
				<Button bsStyle="danger" bsSize="large" onClick={this.props.getTest}>
					Load
				</Button>
				<br />
				<Link to='/about'>
					<Button bsStyle="success" bsSize="large">About</Button>
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
	},
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home)
