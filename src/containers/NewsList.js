import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Button } from 'react-bootstrap'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { LinkContainer } from 'react-router-bootstrap'
import * as actions from 'actions'

const { fetchNews, deleteNews } = actions


class NewsList extends Component {

  componentWillMount() {
    this.props.fetchNews()
  }

  

  getData(){ 
    return Object.keys(this.props.news).map(key => this.props.news[key])
  }

  deleteItems(id){
    this.props.deleteNews(id).then( ()=> {
      this.props.fetchNews()
    })
  }

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
                          {this.getData().map((data) => 
                          <tr key={data.id} >
                            <td>{data.id}</td>
                            <td>{data.title}</td>
                            <td>{data.detail}</td>
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
    news: state.news.get.data
})

const mapDispatchToProps = {
    fetchNews,
    deleteNews
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsList)

                          //<button type='button' className="btn btn-sm btn-danger" onClick={() => onClickButton({data.id},user)}>ลบ</button>
