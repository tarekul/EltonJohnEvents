import React from 'react';
import {HashRouter, Route} from 'react-router-dom'
import FullPage from './containers/fullpage'

class App extends React.Component{
  render(){
    return (
      <HashRouter>
        <Route path='/' component={FullPage} />
      </HashRouter>
    );
  }
  
}

export default App;
