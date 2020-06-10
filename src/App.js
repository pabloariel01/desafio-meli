import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './containers/header/header';
import SearchResults from './containers/search-result/search-result';
import Details from 'containers/details/details'
import NotFound from 'containers/errors/not-found';

function App() {
  return (
    <BrowserRouter>
      <div className="Appwrapper">
        <div className="full-width">
          <header className="full-width">
            <Header />
          </header>
          <div className="container app">
            <div className="content">
            <div className="full-width">
              <Switch>
                {/* <Route path='/' exact render={}/> */}
                <Route exact path="/items">
                  <SearchResults />
                </Route>
                <Route path="/items/:id" >
                <Details />
                </Route>
                <Route path="*">
                  <NotFound />
               </Route>
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
