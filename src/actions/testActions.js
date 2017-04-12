import { push } from 'react-router-redux'

// import { CALL_API } from 'redux-api-middleware'

// export const getTest = () => dispatch => dispatch({
// 	[CALL_API]: {
// 		endpoint: `http://localhost:8888/Laravel-LibKU/public/api/bookinfos`,
// 		headers: {
// 		  'Accept': 'application/json',
// 		  'Content-Type': 'application/json'
// 		},
// 		method: 'GET',
// 		types: [
// 			'GET_TEST_REQUEST',
// 			'GET_TEST_SUCCESS',
// 			'GET_TEST_FAILURE'
// 	    ]
// 	}
// })

//----------------



//-------------------------------

export function getTest(){
	return (dispatch, getState) =>{
		let url = `http://localhost:8888/Laravel-LibKU/public/api/bookinfos`
		return get(url).then(resp => {
			dispatch(author_details(resp))
		}).catch( err => {
			console.log(err)
		})
	}
}

//export function sendForm(title,detail,callno,link,image){
export function sendForm(val){
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
		return get(url).then(resp => {
			console.log(resp)
			dispatch(push('/introlist'))

		}).catch( err => {
			console.log(err)
		})
	}
}

export function get(url){
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

export const author_details = (response) =>  {
	return{
		type : 'LOAD_DETAILS_SUCCESS',
		response : response
	}
}


