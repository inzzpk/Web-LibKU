import React, { Component } from 'react'
import Navbar from './layout/Navbar'
import Header from './layout/Header'

export default class App extends Component {
	render(){
		return (
			 <div>
		        <Navbar />
		        <br />
		        <Header />
		        
		        <div className="container">
			        <div className="row">
			        <br />
		        		{this.props.children}
		        	</div>
		        </div>
		      </div>
		)
	}
}