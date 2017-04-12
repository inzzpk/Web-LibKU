import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Button } from 'react-bootstrap'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { LinkContainer } from 'react-router-bootstrap'
import * as actions from 'actions'

const { fetchIntros, deleteIntros } = actions


class IntroList extends Component {

  constructor() {
    super()
    this.state = {
      current: true
    }
  }


  // shouldComponentUpdate(nextProps, nextState) {
  //   return this.props.intro !== nextProps.intro
  // }

  componentWillMount() {
    this.props.fetchIntros()
  }

  

  getData(){ 
    return Object.keys(this.props.intro).map(key => this.props.intro[key])
  }

  deleteItems(id){
    this.props.deleteIntros(id).then( ()=> {
      this.props.fetchIntros()
    })
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
                          {this.getData().map((data) => 
                          <tr key={data.id} >
                            <td>{data.id}</td>
                            <td>{data.title}</td>
                            <td>{data.callno}</td>
                            <td> 
                            <button type='button' className="btn btn-sm btn-warning" >แก้ไข</button> 
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
    intro: state.intros.get.data
})

const mapDispatchToProps = {
    fetchIntros,
    deleteIntros
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(IntroList)

                          //<button type='button' className="btn btn-sm btn-danger" onClick={() => onClickButton({data.id},user)}>ลบ</button>
