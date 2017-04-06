import { combineReducers } from 'redux'
import { routerReducer  } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import testReducers from 'reducers/testReducers'
import {fetchBookInfos} from 'reducers/fetchBookInfos'

export default combineReducers({
	routing: routerReducer,
	form: formReducer,
	test: testReducers,
	bookinfo: fetchBookInfos
})