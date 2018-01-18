import React from 'react';
import { render } from 'react-dom';
<<<<<<< HEAD
import {BrowserRouter as Router } from 'react-router-dom';

import App from './components/App';

render((
	<Router>
		<App pokemon={window.__PRELOADED_STATE__}/>
	</Router>),
	document.getElementById('root')
	);


=======
import App from './components/App';
render(<App />, document.getElementById('root'));
>>>>>>> 8478cfc76c40a4ed42a4c04cc7f1dbafa479e142
