import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Button } from 'react-bootstrap'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { push } from 'react-router-redux'
import * as actions from 'actions'

const { createIntros } = actions

class Intro extends Component {

    state = {}

  render(){
    const { handleSubmit } = this.props
    return (
      <div className="container">
          <form onSubmit={handleSubmit} className='form' action='javascript:void(0)'>
          <label>ชื่อเรื่อง / ผู้แต่ง : </label>
          <Field name="title" component="input" type="text" autoFocus className="form-control"/>
          <label>เรื่องย่อ : </label>
          <Field name="detail" component="input" type="text" autoFocus className="form-control"/>
          <label>Call No. : </label>
          <Field name="callno" component="input" type="text" autoFocus className="form-control"/>
          <label>Link รายละเอียดเพิ่มเติม : </label>
          <Field name="link" component="input" type="text" autoFocus className="form-control"/>
          <label>URL รูปเล่ม : </label>
          <Field name="image" component="input" type="text" autoFocus className="form-control"/>

          <br/>
          <button type='submit' className='btn btn-sm btn-info'>
                ยืนยัน
            </button>

          </form>
      </div>
    )
  }
}

Intro = reduxForm({
  form: 'introForm'
})(Intro)

const selector = formValueSelector('introForm')

const mapStateToProps = (state) => ({
  dataInput: selector(state, 'dataInput')
})

const mapDispatchToProps = (dispatch) => ({
  onSubmit(value){
    //console.log(value),
    dispatch(createIntros(value))
  }
})


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Intro)


