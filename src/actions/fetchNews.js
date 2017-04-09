const requestFetchSuccessNews = (response) =>  {
	return{
		type : 'LOAD_NEWS_SUCCESS',
		response : response
	}
}

const requestFailFetchNews = (error) =>  {
	return{
		type : 'LOAD_NEWS_FAILURE',
		error : error
	}
}


export function fetchNews() {
	let headers = {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	}
	let options = Object.assign({method: 'GET'})
	options.header = headers
	return (dispatch, getState) => {
		fetch(`http://localhost:8888/Laravel-LibKU/public/api/bookinfos`, options)
		.then(
			(response) => {
				var json = response.json();
			if (response.ok){
				return json
			}
			return json.then(error => {throw err});
			}).then( json => json).then(
				(response) => {dispatch(requestFetchSuccessNews(response))
			}).catch( err => {
				dispatch(requestFailFetchNews(err))
			})

		}
}

