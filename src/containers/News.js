import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Button } from 'react-bootstrap'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import * as actions from 'actions'

const { createNews } = actions

class News extends Component {

    state = {}

	render(){
		const { handleSubmit, pristine, resetForm, submitting } = this.props
  return (
    <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="item">
                <div className="media"> 
                  <h2 className="media-heading"><b>ประชาสัมพันธ์</b></h2>
                  <form onSubmit={handleSubmit} className='form' action='javascript:void(0)'>
                    <label>ชื่อเรื่อง</label>
                    <Field name="title" component="input" type="text" autoFocus className="form-control"/>
                    <label>รายละเอียด : </label>
                    <Field name="detail" component="input" type="text" autoFocus className="form-control"/>
                    <label>Link รายละเอียดเพิ่มเติม : </label>
                    <Field name="link" component="input" type="text" autoFocus className="form-control"/>
                    <label>URL รูป : </label>
                    <Field name="image" component="input" type="text" autoFocus className="form-control"/>

                    <br/>
                    <button type='submit' className='btn btn-sm btn-info'>
                          ยืนยัน
                    </button>

                  </form>
                </div>
            </div>
          </div>
        </div>
      </div>
  )
	}
}

News = reduxForm({
	form: 'newsForm'
})(News)

const selector = formValueSelector('newsForm')

const mapStateToProps = (state) => ({
	dataInput: selector(state, 'dataInput')
})

const mapDispatchToProps = (dispatch) => ({
	onSubmit(value){
		dispatch(createNews(value))
	}
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(News)