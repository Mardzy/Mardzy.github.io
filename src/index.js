const React = require('react');
// React from 'react';
const ReactDOM = require('react-dom');
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router} from 'react-router-dom';
const BrowserRouter = require('react-router-dom');
// import Routes from './components/utility/Routes';
const Routes = require('./components/utility/Routes');
// import MainNav from './components/common/MainNav';
const MainNav = require('./components/common/MainNav');

// import 'bootstrap/dist/css/bootstrap.css';
require('bootstrap/dist/css/bootstrap.css');
require('./scss/style.scss');
// import './scss/style.scss';

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
