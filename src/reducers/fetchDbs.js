const initialState = {
	get: {
		data: {},
	}
}

export const fetchDbs = (state = initialState, action) =>{
	switch(action.type) {
		case 'LOAD_DBS_SUCCESS':
			return {
				...state,
				get: {
					...state.get,
					data: action.response
				}
			}
		case 'LOAD_DBS_FAILURE':
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