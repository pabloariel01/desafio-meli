import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './containers/header/header';
import SearchResults from './containers/search-result/search-result';

function App() {
  return (
    <BrowserRouter>
      <div className="App wrapper">
        <div className="full-width">
          <header className="App-header">
            <Header />
          </header>
          <div className="container">
            <div className="content">
            <div className="full-width">
              <Switch>
                {/* <Route path='/' exact render={}/> */}
                <Route path="/items">
                  <SearchResults />
                </Route>
                <Route path="/items:id" />
              </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
