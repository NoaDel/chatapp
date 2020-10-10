import { render } from '@testing-library/react'
// import React from 'react'
import ReactDOM from 'react-dom'
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './components/Home';
// import About from './components/About';
// import Contact from './components/Contact';
// import Error from './components/Error';
import Navigation from './components/Navigation';
import './Assets/styles.scss';

function success(position) {
    console.log(position)
}


class App extends Component {
    render() {
      return (      
         <BrowserRouter>
          <div>
            <Navigation />
              <Switch>
               <Route path="/" component={Home} exact/>
               {/* <Route path="/about" component={About}/> */}
               {/* <Route path="/contact" component={Contact}/> */}
              {/* <Route component={Error}/> */}
             </Switch>
          </div> 
        </BrowserRouter>
      );
    }
  }

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)