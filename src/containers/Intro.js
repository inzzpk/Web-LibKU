import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Button } from 'react-bootstrap'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { push } from 'react-router-redux'

class Intro extends Component {

    state = {}

	render(){
		const { handleSubmit, pristine, resetForm, submitting } = this.props
  return (
    <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="item">
                <div className="media"> 
                  <h2 className="media-heading"><b>แนะนำหนังสือ</b></h2>
                  <form onSubmit={()=>handleSubmit()} action='http://localhost:8888/Laravel-LibKU/public/api/createBookInfos' method='GET' >
                      <fieldset>
                        <label>ชื่อเรื่อง / ผู้แต่ง : </label>
                        <input type="text" className="form-control" name="title"/>
       
                      </fieldset>
                      <fieldset>
                        <label>เรื่องย่อ : </label>
                        <input type="text" className="form-control" name="detail" />
                         
                      </fieldset>
                      <fieldset>
                        <label>Call No. : </label>
                        <input type="text" className="form-control" name="callno"/>
                         
                      </fieldset>
                      <fieldset>
                        <label>Link รายละเอียดเพิ่มเติม : </label>
                        <input type="text" className="form-control" name="link"/>
                         
                      </fieldset>
                      <fieldset>
                        <label>URL รูปเล่ม : </label>
                        <input type="text" className="form-control" name="image"/>
                 
                      </fieldset>

   
                      <br></br>
                      <fieldset>
                        <button type="submit" className='btn btn-sm btn-info' disabled={submitting} > ยืนยัน </button>
                        <button type="button" className='btn btn-sm btn-info' onClick={() => resetForm()} disabled={submitting} > ล้าง </button>
                      </fieldset>
                  </form>
                </div>
            </div>
          </div>
        </div>
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
		console.log(value)
    push('/introlist')
	}
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Intro)