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

export function sendForm(title,detail,callno,link,img){
	return (dispatch, getState) =>{
		const param= [
		`title=${title}`,
		`detail=${detail}`,
		`callno=${callno}`,
		`link=${link}`,
		`img=${img}`,
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

//---------------

// 'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
// 'Accept-Encoding':'gzip, deflate, sdch',
// 'Accept-Language':'en-US,en;q=0.8,th;q=0.6',
// 'Cache-Control':'max-age=0',
// 'Connection':'keep-alive',
// 'Cookie':'XSRF-TOKEN=eyJpdiI6InVEdVZWYmVQdER6XC9QUmNDRXU3K1JRPT0iLCJ2YWx1ZSI6IkVjZ0VFbGg4dFl2NGZcL2xCQTNJSXE2YzI5Nkg1bWJMV1dBUFdzUGlVRzNlMUhlbGM5V0NhQlhUTmcyYm5VZGQ5T3B1bkVhTTJtYWx4ZUdDb3MwOFU3dz09IiwibWFjIjoiMTQ3NjY5MGNiMDQ1YzNjNGMxNjk5YmI0MTI3OTEzODU5Y2M3MTljMWQ4MWRlMjhkZTdmMGM2NjhmZTY1MGRkOCJ9; laravel_session=eyJpdiI6IldTRHEwdVo2U3ljTCs3Q1NwRDF3ZlE9PSIsInZhbHVlIjoiQ2pnMUlvaXBKdWVWenNQQmYyV1Y2QWdGZFpPZkh5bHY0RjRVNFwvU0w2K05nWjdkNmRMWXlOQ2JkaG5cL0w3S2RucTlnU1wva1NmUVZGNUVzZ3hteEFkaVE9PSIsIm1hYyI6IjdlODQzNmIxMDM2NTdmNDNlYjlmNjI4ZDZiYmViNGJkYzI5ODBhZDEyY2E2ODZhN2JmNDExODBmYzA1YmE1ZGEifQ%3D%3D',
// 'Host':'158.108.141.227:8888',
// 'Upgrade-Insecure-Requests':'1',
// 'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36'


// export const getTest = () => dispatch => dispatch({
// 	[CALL_API]: {
// 		// endpoint: `https://jsonplaceholder.typicode.com/posts/1`,
// 		endpoint: `http://158.108.141.227:8888/Laravel-LibKU/public/api/bookinfos`,
// 		headers: {
// 		  'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
// 			'Accept-Encoding':'gzip, deflate, sdch',
// 			'Accept-Language':'en-US,en;q=0.8,th;q=0.6',
// 			'Cache-Control':'max-age=0',
// 			'Connection':'keep-alive',
// 			'Cookie':'XSRF-TOKEN=eyJpdiI6InVEdVZWYmVQdER6XC9QUmNDRXU3K1JRPT0iLCJ2YWx1ZSI6IkVjZ0VFbGg4dFl2NGZcL2xCQTNJSXE2YzI5Nkg1bWJMV1dBUFdzUGlVRzNlMUhlbGM5V0NhQlhUTmcyYm5VZGQ5T3B1bkVhTTJtYWx4ZUdDb3MwOFU3dz09IiwibWFjIjoiMTQ3NjY5MGNiMDQ1YzNjNGMxNjk5YmI0MTI3OTEzODU5Y2M3MTljMWQ4MWRlMjhkZTdmMGM2NjhmZTY1MGRkOCJ9; laravel_session=eyJpdiI6IldTRHEwdVo2U3ljTCs3Q1NwRDF3ZlE9PSIsInZhbHVlIjoiQ2pnMUlvaXBKdWVWenNQQmYyV1Y2QWdGZFpPZkh5bHY0RjRVNFwvU0w2K05nWjdkNmRMWXlOQ2JkaG5cL0w3S2RucTlnU1wva1NmUVZGNUVzZ3hteEFkaVE9PSIsIm1hYyI6IjdlODQzNmIxMDM2NTdmNDNlYjlmNjI4ZDZiYmViNGJkYzI5ODBhZDEyY2E2ODZhN2JmNDExODBmYzA1YmE1ZGEifQ%3D%3D',
// 			'Host':'158.108.141.227:8888',
// 			'Upgrade-Insecure-Requests':'1',
// 			'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36',
// 			'Access-Control-Allow-Origin':'.*'
// 		},
// 		method: 'GET',
// 		types: [
// 			'GET_TEST_REQUEST',
// 			'GET_TEST_SUCCESS',
// 			'GET_TEST_FAILURE'
// 	    ]
// 	}
// })
