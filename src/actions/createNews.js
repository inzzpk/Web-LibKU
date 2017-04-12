import { push } from 'react-router-redux'

export function createNews(val){

	return (dispatch, getState) =>{
		const param= [
		`title=${val.title}`,
		`detail=${val.detail}`,
		`link=${val.link}`,
		`image=${val.image}`,
		].join('&')
		let url = `http://localhost:8888/Laravel-LibKU/public/api/createNews?${param}`
		return gettt(url).then(resp => {
			console.log(resp)
			dispatch(push('/newslist'))

		}).catch( err => {
			console.log(err)
		})
	}
}

export function gettt(url){
	let headers = {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	}
	let options = Object.assign({method: 'GET'})
	options.header = headers
	return fetch(url,options).then(
		resp => {
			var json = resp.json();
		if (resp.ok){
			return json
		}
		return json.then(error => {throw err});
	}).then( json => json)
}