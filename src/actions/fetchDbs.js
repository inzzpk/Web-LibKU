import { API_END_POINT } from '../config'

const requestFetchSuccessDbs = (response) =>  {
	return{
		type : 'LOAD_DBS_SUCCESS',
		response : response
	}
}

const requestFailFetchDbs = (error) =>  {
	return{
		type : 'LOAD_DBS_FAILURE',
		error : error
	}
}


export function fetchDbs() {
	let headers = {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	}
	let options = Object.assign({method: 'GET'})
	options.header = headers
	return (dispatch, getState) => {
		fetch(`${API_END_POINT}/fetchDbs`, options)
		.then(
			(response) => {
				var json = response.json();
			if (response.ok){
				return json
			}
			return json.then(error => {throw err});
			}).then( json => json).then(
				(response) => {dispatch(requestFetchSuccessDbs(response))
			}).catch( err => {
				dispatch(requestFailFetchDbs(err))
			})

	}
}

