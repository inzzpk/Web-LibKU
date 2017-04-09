const initialState = {
	get: {
		data: {},
	}
}

export const fetchNews = (state = initialState, action) =>{
	switch(action.type) {
		case 'LOAD_NEWS_SUCCESS':
			return {
				...state,
				get: {
					...state.get,
					data: action.response
				}
			}
		case 'LOAD_NEWS_FAILURE':
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