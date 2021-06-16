// import React from 'react';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import about from './components/pages/about';
import ourtech from './components/pages/ourtech';
import vision from './components/pages/vision';
import Footer from './components/Footer';
import Cards from './components/Cards';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={about} />
          <Route path='/ourtech' component={ourtech} />
          <Route path='/vision' component={vision} />
          <Route path='/Footer' component={Footer} />
          <Route path='/Cards' component={Cards} />

          

        </Switch>
      </Router>
    </>
  );
}

export default App;
