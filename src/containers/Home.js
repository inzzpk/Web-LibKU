import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Button } from 'react-bootstrap'


export default class Home extends Component {
	
	render(){
		return (
			<div> 
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="item">
								<div className="media" style={{float: "center"}}> 
									<h2 ><b>ยินดีต้อนรับ</b></h2>
									<br/>
									<h4>นางสาวพิมวนัช  โกศิยะกุล</h4>
									<h4>5610503922</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
