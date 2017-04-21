import React from 'react'
import {
	Router,
	Route,
	IndexRoute
} from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import About from 'containers/About'
import App from 'containers/App'
import Home from 'containers/Home'
import Intro from 'containers/Intro'
import News from 'containers/News'
import NewsList from 'containers/NewsList'
import IntroList from 'containers/IntroList'
import Dbs from 'containers/Dbs'
import DbsList from 'containers/DbsList'


export default (store, history) => (
	<Router history={syncHistoryWithStore(history, store)}>
		<Route path='/' component={App}>
			<IndexRoute component={Home} />
			<route path='about' component={About} />
			<route path='intro' component={Intro} />
			<route path='introlist' component={IntroList} />
			<route path='newslist' component={NewsList} />
			<route path='news' component={News} />
			<route path='dbs' component={Dbs} />
			<route path='dbslist' component={DbsList} />
		</Route>
	</Router>
)