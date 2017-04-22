import { push } from 'react-router-redux'
import { API_END_POINT } from '../config'

export function deleteNews(id) {
	console.log(JSON.stringify(id))
	let data = {"id":id}
	console.log(JSON.stringify(data))
	return (dispatch) => {
		return new Promise ( (resolve,reject)=>{
			fetch(`${API_END_POINT}/deleteNews`, {
			  method: 'post',
			  headers: {
			    'Accept': 'application/json',
			    'Content-Type': 'application/json'
			  },
			  body: JSON.stringify(data)
			})
			.then(function (response) {
			    console.log(response);
			    resolve(response)
			})
			.catch(function (error) {
			    console.log(error);
			    reject(err)
			});	
		})
	}
}