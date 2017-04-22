import { API_END_POINT } from '../config'

const requestFetchSuccessIntros = (response) =>  {
	return{
		type : 'LOAD_INTRO_SUCCESS',
		response : response
	}
}

const requestFailFetchIntros = (error) =>  {
	return{
		type : 'LOAD_INTRO_FAILURE',
		error : error
	}
}


export function fetchIntros() {
	let headers = {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	}
	let options = Object.assign({method: 'GET'})
	options.header = headers
	return (dispatch, getState) => {
		fetch(`${API_END_POINT}/fetchIntro`, options)
		.then(
			(response) => {
				var json = response.json();
			if (response.ok){
				return json
			}
			return json.then(error => {throw err});
			}).then( json => json).then(
				(response) => {dispatch(requestFetchSuccessIntros(response))
			}).catch( err => {
				dispatch(requestFailFetchIntros(err))
			})

	}
}



