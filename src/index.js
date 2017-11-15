import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import Routes from './components/utility/Routes';
import MainNav from './components/common/MainNav';
// const React = require('react');
// const ReactDOM = require('react-dom');
// const {BrowserRouter} = require('react-router-dom');
// const Routes = require('./components/utility/Routes');
// const MainNav = require('./components/common/MainNav');

import 'bootstrap/dist/css/bootstrap.css';
// require('bootstrap/dist/css/bootstrap.css');
// require('./scss/style.scss');
import './scss/style.scss';

class App extends React.Component {


  componentDidMount(){
    console.log('hello did mount');
    const mainmenu = document.getElementById('main-menu');
    const navIcon = document.getElementById('nav-icon');
    const toggleIcon = () =>{
      navIcon.addEventListener('click', ()=> {
        navIcon.classList.toggle('open');
        mainmenu.classList.toggle('opened');
      });
    };
    toggleIcon();
  }
  render(){
    console.log('hello render');
    return (
      <BrowserRouter>
        <main>
          <MainNav />
          <Routes />
        </main>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
