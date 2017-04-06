import fetch from 'isomorphic-fetch'

const requestFetchBookInfo = () => {
	return{
		type : 'LOAD_BOOKINFO_REQUEST',
	}
}

export const requestFetchSuccessBookInfo = (response) =>  {
	return{
		type : 'LOAD_BOOKINFO_SUCCESS',
		response : response
	}
}

const requestFailFetchBookInfo = (error) =>  {
	return{
		type : 'LOAD_BOOKINFO_FAIL',
		error : error
	}
}

export function fetchBookInfos() {

	return (dispatch) => { 
		dispatch(requestFetchBookInfo())
		fetch(`http://localhost:8888/Laravel-LibKU/public/api/bookinfos`)
		.then(
			(response) => {
			response.json().then( (json) =>{
				dispatch(requestFetchSuccessBookInfo(json))
				console.log(json)
				})
			},
			(error) => {
				dispatch(requestFailFetchBookInfo(error))
			}
		)
	}
}