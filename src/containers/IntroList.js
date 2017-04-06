import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Button } from 'react-bootstrap'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { LinkContainer } from 'react-router-bootstrap'


class IntroList extends Component {



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
                      <tr >
                          <td>1</td>
                          <td>พระราชพงศาวดารกรุงรัตนโกสินทร์ รัชกาลที่ 5</td>
                          <td>สมเด็จฯ กรมพระยาดำรงราชานุภาพ, กรุงเทพฯ : ไทยควอลิตี้บุ๊คส์ (2006), 2559</td>
                          <td> 
                          <button type='button' className="btn btn-sm btn-warning" >แก้ไข</button> 
                          <button type='button' className="btn btn-sm btn-danger">ลบ</button>
                        </td>
                      </tr>
                      <tr >
                          <td>2</td>
                          <td>The secret of volume by price</td>
                          <td>จุติ เสนางคนิกร, กรุงเทพฯ : ซุปเปอร์เทรดเดอร์ พับลิชชิ่ง จำกัด, 2559</td>
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
)(IntroList)