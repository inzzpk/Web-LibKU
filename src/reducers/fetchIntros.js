const initialState = {
	get: {
		data: {},
	}
}

export const fetchIntros = (state = initialState, action) =>{
	switch(action.type) {
		case 'LOAD_INTRO_SUCCESS':
			return {
				...state,
				get: {
					...state.get,
					data: action.response
				}
			}
		case 'LOAD_INTRO_FAILURE':
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