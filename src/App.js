import React from 'react';
import './App.scss';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from './containers/header/header.js';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
        <Header />
  

        </header>

        <Switch>
          {/* <Route path='/' exact render={}/> */}
          <Route path='/items' />
          <Route path='/items:id' />

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
