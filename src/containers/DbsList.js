import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Button } from 'react-bootstrap'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { LinkContainer } from 'react-router-bootstrap'
import * as actions from 'actions'

const { fetchDbs, deleteDbs } = actions


class DbsList extends Component {

  componentWillMount() {
    this.props.fetchDbs()
  }

  getData(){ 
    return Object.keys(this.props.dbs).map(key => this.props.dbs[key])
  }

  deleteItems(id){
    this.props.deleteDbs(id).then( ()=> {
      this.props.fetchDbs()
    }).catch( ()=>console.log("err"))
  }

	render(){
  return (
      <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="item">
                <div className="media"> 
                  <h2 className="media-heading"><b>ฐานข้อมูล</b>
                    <LinkContainer to="/dbs">
                      <button className="btn btn-sm btn-info" style={{float: "right", margin: "10px"}}>เพิ่มฐานข้อมูล</button> 
                    </LinkContainer></h2>
                    <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>ลำดับ</th>
                        <th>ชื่อ</th>
                        <th>Link รายละเอียด</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                          {this.getData().map((data,index) => 
                          <tr key={index+1} >
                            <td>{index+1}</td>
                            <td>{data.name}</td>
                            <td>{data.link}</td>
                            <td> 
                            <button type='button' className="btn btn-sm btn-danger" onClick={() => this.deleteItems(data.id) }>ลบ</button>
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
    dbs: state.dbs.get.data
})

const mapDispatchToProps = {
    fetchDbs,
    deleteDbs
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(DbsList)

                          //<button type='button' className="btn btn-sm btn-danger" onClick={() => onClickButton({data.id},user)}>ลบ</button>
