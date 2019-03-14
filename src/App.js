import React, {Component} from 'react';
import {Switch, BrowserRouter, Route} from 'react-router-dom';
import Home from './Components/Layouts/Home';
import About from './Components/Layouts/About';
import Contact from './Components/Layouts/Contact';
import Events from './Components/Layouts/Events';
import HappyTails from './Components/Layouts/HappyTails';
import CatAdoption from './Components/Layouts/CatAdoption';
import DogAdoption from './Components/Layouts/DogAdoption';
import AdoptingOlderPets from './Components/Layouts/AdoptingOlderPets';
import FosterProgram from './Components/Layouts/FosterProgram';
import Dog4Day from './Components/Layouts/Dog4Day';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import './App.css';

class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <div className='App'>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/About' component={About} />
            <Route path='/Contact' component={Contact} />
            <Route path='/Events' component={Events} />
            <Route path='/HappyTails' component={HappyTails} />
            <Route path='/DogAdoption' component={DogAdoption} />
            <Route path='/CatAdoption' component={CatAdoption} />
            <Route path='/AdoptingOlderPets' component={AdoptingOlderPets} />
            <Route path='/FosterProgram' component={FosterProgram} />
            <Route path='/Dog4Day' component={Dog4Day} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
