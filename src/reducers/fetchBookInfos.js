export const fetchBookInfos = (state = [], action) =>{
	let bookinfos
	switch (action.type){
		case 'LOAD_BOOKINFO_REQUEST' :
			return state
		case 'LOAD_BOOKINFO_SUCCESS' :
			return action.response
		case 'LOAD_BOOKINFO_FAIL' :
			return action.error
		default:
			return state
	}
}