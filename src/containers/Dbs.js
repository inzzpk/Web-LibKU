import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Button } from 'react-bootstrap'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { push } from 'react-router-redux'
import * as actions from 'actions'

const { createDbs } = actions

class Dbs extends Component {

    state = {}

  render(){
    const { handleSubmit } = this.props
    return (
      <div className="container">
          <form onSubmit={handleSubmit} className='form' action='javascript:void(0)'>
          <label>ชื่อฐานข้อมูล : </label>
          <Field name="name" component="input" type="text" autoFocus className="form-control"/>
          <label>URL รูปภาพ : </label>
          <Field name="url_pic" component="input" type="text" autoFocus className="form-control"/>
          <label>เนื้อหา : </label>
          <Field name="intro" component="input" type="text" autoFocus className="form-control"/>
          <label>Link รายละเอียดเพิ่มเติม : </label>
          <Field name="link" component="input" type="text" autoFocus className="form-control"/>

          <br/>
          <button type='submit' className='btn btn-sm btn-info'>
                ยืนยัน
            </button>

          </form>
      </div>
    )
  }
}

Dbs = reduxForm({
  form: 'dbsForm'
})(Dbs)

const selector = formValueSelector('dbsForm')

const mapStateToProps = (state) => ({
  dataInput: selector(state, 'dataInput')
})

const mapDispatchToProps = (dispatch) => ({
  onSubmit(value){
    dispatch(createDbs(value))
  }
})


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Dbs)


