import React from 'react';
import './App.css';

// routing
import { Route, Switch } from 'react-router-dom';

// components
import HomePage from './pages/homepage/homepage.component';

const JewelriesPage = () => (
  <div>
    <h1>Jewelries Pages</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop/jewelries' component={JewelriesPage} />
      </Switch>
    </div>
  );
}  

export default App;
