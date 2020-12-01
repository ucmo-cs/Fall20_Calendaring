import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Navigation, Home, NewAccount, Login } from "./components";
const ReactDOM = require('react-dom');

function App() {
	return (
		<div className="container">
			<Router>
				<Navigation />
				<div className="col-md-6">
					<h1 className="text-center" style={style}>Calendar App</h1>
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/new-account" component={NewAccount} />
						<Route path="/login" component={Login} />
					</Switch>
				</div>
			</Router>
		</div>
	);
}

const style = {
	color: 'red',
	margin: '10px'
}

export default App;
