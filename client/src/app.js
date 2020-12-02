import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Navigation, Home, NewAccount, Login, ShareCalendar, Calendar } from "./components";
import 'bootstrap/dist/css/bootstrap.min.css';
const ReactDOM = require('react-dom');

function App() {
	const [account_id, setAccountID] = useState(null);

	return (
		// account_id === null ?
		// <div className="container">
		// 	<Router>
		// 		<Navigation />
		// 			<h1 className="text-center">Calendar App</h1>
		// 			<Switch>
		// 				<Route path="/new-account" component={NewAccount} />
		// 				<Route path="/" exact component={Home} />
		// 				<Route path="/login" component={Login} />
		// 			</Switch>
		// 	</Router>
		// </div>
		// :
		<div className="container">
			<Router>
				<Navigation />
					<h1 className="text-center">Calendar App</h1>
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/new-account" component={NewAccount} />
						<Route path="/login" component={Login} />
						<Route path="/share-calendar" component={ShareCalendar} />
						<Route path="/calendar" component={Calendar} />
					</Switch>
			</Router>
		</div>
	);
}

export default App;
