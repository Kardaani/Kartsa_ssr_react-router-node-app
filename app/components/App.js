import React from 'react';
<<<<<<< HEAD
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch
} from 'react-router-dom';

import List from './List'
import Home from './Home'
export default function App(props) {

	const { pokemon } = props;

	return (
		<div>
		Your React Node app is set up!
		<Switch>
		<Route path="/" exact component={Home} />
		<Route path="/pokemon" exact render={() => (<Redirect to="/pokemon/ability/telepathy" />)} />
		<Route path="/pokemon/ability/:ability" render={(location) => (<List pokemon={pokemon.list} location={location} />)} />
		</Switch>
		</div>
	)
};


=======

export default function App() {
     return <div>Your React Node app is set up!</div>
};
>>>>>>> 8478cfc76c40a4ed42a4c04cc7f1dbafa479e142
