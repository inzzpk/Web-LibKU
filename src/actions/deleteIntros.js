import { push } from 'react-router-redux'

export function deleteIntros(id) {
	
	return (dispatch, getState) =>{
		const param= [
		`id=${id}`,
		].join('&')
		let url = `http://localhost:8888/Laravel-LibKU/public/api/deleteBookInfos?${param}`
		return getdelete(url).then(resp => {
			// console.log(resp)
			console.log("delete complete")
			dispatch(push('/introlist'))

		}).catch( err => {
			console.log(err)
		})
	}
}

export function getdelete(url){
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