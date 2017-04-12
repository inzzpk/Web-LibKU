import { push } from 'react-router-redux'

export function createIntros(val){
	console.log(val)
	console.log(val.title)
	return (dispatch, getState) =>{
		const param= [
		`title=${val.title}`,
		`detail=${val.detail}`,
		`callno=${val.callno}`,
		`link=${val.link}`,
		`image=${val.image}`,
		].join('&')
		let url = `http://localhost:8888/Laravel-LibKU/public/api/createBookInfos?${param}`
		return gett(url).then(resp => {
			console.log(resp)
			dispatch(push('/introlist'))

		}).catch( err => {
			console.log(err)
		})
	}
}

export function gett(url){
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