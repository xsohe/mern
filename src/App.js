import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LandingPage from 'pages/LandingPage';
import DetailsPage from 'pages/DetailsPage';
import Example from 'pages/Example';
import Checkout from 'pages/Checkout';

import 'assets/scss/style.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage} />
        <Route path="/properties/:id" component={DetailsPage} />
        <Route path="/example" component={Example} />
        <Route path="/checkout" component={Checkout} />
      </Router>
    </div>
  );
}

export default App;
