import React from 'react';
import ReactDOM from 'react-dom';

// router
import { BrowserRouter as Router } from 'react-router-dom';

// redux
import { Provider } from 'react-redux';

// storage
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';

import './index.css';
import App from './App';


ReactDOM.render(
	<Provider store={store}>
		<Router>
			<PersistGate persistor={persistor}>
				<App />
			</PersistGate>
		</Router>
	</Provider>,
	document.getElementById('root')
);
