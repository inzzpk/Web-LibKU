import { push } from 'react-router-redux'

export function createDbs(data) {
	console.log(JSON.stringify(data))
	return (dispatch) => {
		fetch(`http://localhost:7777/addDbs`, {
		  method: 'post',
		  headers: {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json'
		  },
		  body: JSON.stringify(data)
		})
		.then(function (response) {
		    console.log(response);
		    dispatch(push('/dbslist'))
		  })
		.catch(function (error) {
		    console.log(error);
		  });
	}
}

/*
export function createDbs(val){
	console.log(val)
	return (dispatch, getState) =>{
		const param= [
		`name=${val.name}`,
		`url_pic=${val.url_pic}`,
		`link=${val.link}`,
		`intro=${val.intro}`,
		].join('&')
		let url = `http://localhost:8888/Laravel-LibKU/public/api/createDbs?${param}`
		return getdbs(url).then(resp => {
			console.log(resp)
			dispatch(push('/dbslist'))

		}).catch( err => {
			console.log(err)
		})
	}
}

export function getdbs(url){
	let headers = {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	}
	let options = Object.assign({method: 'GET'})
	options.header = headers
	console.log(options)
	return fetch(url,options).then(
		resp => {
			var json = resp.json();
		if (resp.ok){
			return json
		}
		return json.then(error => {throw err});
	}).then( json => json)
}*/