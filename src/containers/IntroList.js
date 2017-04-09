import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Button } from 'react-bootstrap'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { LinkContainer } from 'react-router-bootstrap'
import * as actions from 'actions'

const { fetchIntros } = actions


class IntroList extends Component {

  componentWillMount() {
    this.props.fetchIntros()
  }

  getData(){
    return Object.keys(this.props.intro).map(key => this.props.intro[key])
  }

	render(){
  return (
      <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="item">
                <div className="media"> 
                  <h2 className="media-heading"><b>แนะนำทรัพยากร</b>
                    <LinkContainer to="/intro">
                      <button className="btn btn-sm btn-info" style={{float: "right", margin: "10px"}}>เพิ่มทรัพยากร</button> 
                    </LinkContainer></h2>
                    <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>ลำดับ</th>
                        <th>เรื่อง</th>
                        <th>รายละเอียด</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                          {this.getData().map(data => 
                          <tr key={data.id}>
                          <td>{data.id}</td>
                          <td>{data.tittle}</td>
                          <td>{data.author}</td>
                          <td> 
                          <button type='button' className="btn btn-sm btn-warning" >แก้ไข</button> 
                          <button type='button' className="btn btn-sm btn-danger">ลบ</button>
                        </td>
                      </tr>
                      )}
                    </tbody>
                  </table>
                  
                </div>
              </div>
            </div>
          </div>
      </div>
  )
	}
}


const mapStateToProps = (state) => ({
    intro: state.intros.get.data
})

const mapDispatchToProps = {
    fetchIntros
}



export default connect(
	mapStateToProps,
	mapDispatchToProps
)(IntroList)
