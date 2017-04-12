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


/*
 constructor(props) {
    super(props);
    this.state = {
      title: '',
      detail: '',
      callno: '',
      link: '',
      image: '',
    };
  }
  
  sendForm(){
    this.props.sendForm(this.state.title,
                        this.state.detail,
                        this.state.callno,
                        this.state.link,
                        this.state.image)
    // this.props.sendForm(this.state.title,this.state.detail,this.state.callno,this.state.link,this.state.img)
  }


	render(){
		const { handleSubmit, pristine, resetForm, submitting } = this.props
  return (
    <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="item">
                <div className="media"> 
                  <h2 className="media-heading"><b>แนะนำหนังสือ</b></h2>
                  <form  >
                      <fieldset>
                        <label>ชื่อเรื่อง / ผู้แต่ง : </label>
                        <input type="text" value={this.state.title} onChange={(event)=> this.setState({title: event.target.value})} className="form-control" />
       
                      </fieldset>
                      <fieldset>
                        <label>เรื่องย่อ : </label>
                        <input type="text" value={this.state.detail} onChange={(event)=> this.setState({detail: event.target.value})} className="form-control" />
                         
                      </fieldset>
                      <fieldset>
                        <label>Call No. : </label>
                        <input type="text" value={this.state.callno} onChange={(event)=> this.setState({callno: event.target.value})} className="form-control" />
                         
                      </fieldset>
                      <fieldset>
                        <label>Link รายละเอียดเพิ่มเติม : </label>
                        <input type="text" value={this.state.link} onChange={(event)=> this.setState({link: event.target.value})} className="form-control" />
                         
                      </fieldset>
                      <fieldset>
                        <label>URL รูปเล่ม : </label>
                        <input type="text" value={this.state.image} onChange={(event)=> this.setState({image: event.target.value})} className="form-control" />
                 
                      </fieldset>


   
                      <br></br>
                      <fieldset>
                        <button type="button" className='btn btn-sm btn-info' onClick={()=> this.sendForm() } disabled={submitting}  > ยืนยัน </button>
                        <button type="button" className='btn btn-sm btn-info' onClick={() => resetForm() } disabled={submitting} > ล้าง </button>
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
	// onSubmit(value){
	// 	console.log(value)
 //    push('/introlist')
	// },
  sendForm(title,detail,callno,link,image){
    dispatch(sendForm(title,detail,callno,link,image))
  }
})
*/


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Intro)


