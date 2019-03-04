import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import MemeGenerator from './components/MemeGenerator';

class App extends React.Component{
  render(){
    return(
      <div>
        <Header/>
        <MemeGenerator/>
      </div>
    )
  }
}

export default App;
