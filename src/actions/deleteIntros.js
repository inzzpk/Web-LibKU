const requestDeleteIntro = () => {
	return{
		type : 'DELETE_TEACHER_REQUEST',
		data : 'Wait...'
	}
}

const requestSuccessDeleteIntro = (data) =>  {
	return{
		type : 'DELETE_TEACHER_SUCCESS',
		dataDeleteIntro : data
	}
}

const requestFailDeleteIntro = (error) =>  {
	return{
		type : 'DELETE_TEACHER_FAIL',
		error : error
	}
}

export function deleteIntro(index,user_id) {
	console.log(user_id)
	return (dispatch, getState) => {
		dispatch(requestDeleteIntro())
		fetch(`http://localhost:8888/Laravel-LibKU/public/api/deleteBookInfos`, {
		  method: 'get',
		  headers: {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json'
		  },
		  body: JSON.stringify({user_id})
		})
		.then(
			(response) => {
				response.text().then((text) => {
					if(text == 'Success'){
						let teachers = [...getState().fetchIntros]
						let teacher = {...teachers[index]}
						dispatch(requestSuccessDeleteIntro({index,teacher}))
					}
					else{
						dispatch(requestFailDeleteIntro(error))
					}
				})
			},
			(error) => {
				dispatch(requestFailDeleteIntro(error))
			}
		)

	}
}