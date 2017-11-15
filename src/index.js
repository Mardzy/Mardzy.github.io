const React = require('react');
// React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';

import Routes from './components/utility/Routes';
import MainNav from './components/common/MainNav';


import 'bootstrap/dist/css/bootstrap.css';
import 'fontawesome';
import './scss/style.scss';

class App extends React.Component {
  componentDidMount(){
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
    console.log('hello');
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
