import { combineReducers } from 'redux'
import { routerReducer  } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import testReducers from 'reducers/testReducers'
import {fetchIntros} from 'reducers/fetchIntros'
import {fetchNews} from 'reducers/fetchNews'
import {fetchDbs} from 'reducers/fetchDbs'

export default combineReducers({
	routing: routerReducer,
	form: formReducer,
	test: testReducers,
	intros: fetchIntros,
	news: fetchNews,
	dbs: fetchDbs
})