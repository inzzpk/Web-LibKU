import { push } from 'react-router-redux'

export function deleteNews(id) {
	
	return (dispatch, getState) =>{
		const param= [
		`id=${id}`,
		].join('&')
		let url = `http://localhost:8888/Laravel-LibKU/public/api/deleteNews?${param}`
		return getdeletenews(url).then(resp => {
			// console.log(resp)
			console.log("delete complete")
			dispatch(push('/newslist'))

		}).catch( err => {
			console.log(err)
		})
	}
}

export function getdeletenews(url){
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