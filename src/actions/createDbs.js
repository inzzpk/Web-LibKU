import { push } from 'react-router-redux'
import { API_END_POINT } from '../config'

export function createDbs(data) {
	console.log(JSON.stringify(data))
	return (dispatch) => {
		fetch(`${API_END_POINT}/addDbs`, {
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