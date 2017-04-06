const initialState = {
	get: {
		data: {},
	}
}

export default (state = initialState, action) => {
	switch(action.type) {
		case 'LOAD_DETAILS_SUCCESS':
		console.log("HEllo")
			return {action}
		case 'GET_TEST_REQUEST':
			console.log("TEST1")
			console.log(action)
			return {
				...state,
				get: {
					...state.get
				}
			}
		case 'GET_TEST_SUCCESS':
		console.log("TEST2")
			return {
				...state,
				get: {
					...state.get,
					data: action.payload
				}
			}
		case 'GET_TEST_FAILURE':
		console.log("TEST3")
			return {
				...state,
				get: {
					...state.get
				}
			}
		default:
			return state
	}
}