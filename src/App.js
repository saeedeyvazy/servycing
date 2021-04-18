import React from 'react'

import './App.css'
import HomePage from './pages/HomePage'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import CustomerAccessPage from './pages/CustomerAccessPage'

function App() {
	return (
		<div className='App'>
			<Router>
				<Switch>
					<Route exact component={HomePage} path='/'/>
					<Route exact component={CustomerAccessPage} path='/customer/access/:action'/>
				</Switch>
			</Router>
		</div>
	)
}

export default App
