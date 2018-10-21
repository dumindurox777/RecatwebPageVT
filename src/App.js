import React, { Component } from 'react';
import './App.css';
import UserDetails from './components/UserDetails';




class App extends Component {
  render() {
    return (
      <div className="container">
       <div className="col-md-3">
      <UserDetails/>
      </div>
      
      
      </div>
    );
  }
}

export default App;
