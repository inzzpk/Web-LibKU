import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Button } from 'react-bootstrap'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { LinkContainer } from 'react-router-bootstrap'

class NewsList extends Component {

	render(){
  return (
      <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="item">
                <div className="media"> 
                  <h2 className="media-heading"><b>ข่าว</b>
                    <LinkContainer to="/news">
                      <button className="btn btn-sm btn-info" style={{float: "right", margin: "10px"}}>เพิ่มข่าว</button> 
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
                      <tr >
                          <td>1</td>
                          <td>แจ้งเวลาการเปิดปิด</td>
                          <td>อิอิ</td>
                          <td> 
                          <button type='button' className="btn btn-sm btn-warning" >แก้ไข</button> 
                          <button type='button' className="btn btn-sm btn-danger">ลบ</button>
                        </td>
                      </tr>
                      <tr >
                          <td>2</td>
                          <td>งานหนังสือ</td>
                          <td>อิอิ</td>
                          <td> 
                          <button type='button' className="btn btn-sm btn-warning" >แก้ไข</button> 
                          <button type='button' className="btn btn-sm btn-danger">ลบ</button>
                        </td>
                      </tr>
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

})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(NewsList)