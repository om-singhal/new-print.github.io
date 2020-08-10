import React from 'react';
import homepage from './homepage';
import productpage from './productpage';
import {BrowserRouter as Router,  Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div id="parent">
    
    <Route path="/" exact component={homepage}/>
    <Route path="/products/:id" component={productpage}/>
    
    </div>
    </Router>

  );
} 
export default App;
