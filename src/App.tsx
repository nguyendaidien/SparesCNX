import './static/scss/global.scss'

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CreatePart from './pages/CreatePart';
import Home from './pages/Home';
import Header from './components/Header';
import { PartProvider } from './state/part/context';
function App() {

  return (
    <PartProvider>
      <Router>
        <div className="App">
          <Header />
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/create" component={CreatePart} />
          </div>
        </div>
      </Router>
    </PartProvider>
  );
}

export default App;
