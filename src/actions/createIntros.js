
import { push } from 'react-router-redux'
/*
export function createIntros(val){
	return (dispatch, getState) =>{
		const param= [
		`title=${val.title}`,
		`detail=${val.detail}`,
		`callno=${val.callno}`,
		`link=${val.link}`,
		`image=${val.image}`,
		].join('&')
		let url = `http://localhost:8888/Laravel-LibKU/public/api/createBookInfos?${param}`
		return getintro(url).then(resp => {
			console.log(resp)
			dispatch(push('/introlist'))

		}).catch( err => {
			console.log(err)
		})
	}
}

export function getintro(url){
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
*/


export function createIntros(data) {
	console.log(JSON.stringify(data))
	return (dispatch) => {
		fetch(`http://localhost:7777/addIntro`, {
		  method: 'post',
		  headers: {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json'
		  },
		  body: JSON.stringify(data)
		})
		.then(function (response) {
		    console.log(response);
		    dispatch(push('/introlist'))
		  })
		.catch(function (error) {
		    console.log(error);
		  });
	}
}
