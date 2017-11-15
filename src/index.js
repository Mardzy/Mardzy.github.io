const React = require('react');
// React from 'react';
const ReactDOM = require('react-dom');
// import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';

import Routes from './components/utility/Routes';
import MainNav from './components/common/MainNav';


import 'bootstrap/dist/css/bootstrap.css';
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
      <Router>
        <main>
          <MainNav />
          <Routes />
        </main>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
