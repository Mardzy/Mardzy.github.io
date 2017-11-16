import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import Routes from './components/utility/Routes';
import MainNav from './components/common/MainNav';
import 'bootstrap/dist/css/bootstrap.css';
import './scss/style.scss';

class App extends React.Component {

  componentDidMount(){
    const mainMenu = document.getElementById('transition');
    console.log(mainMenu);
    const navIcon = document.getElementById('nav-icon');
    const toggleIcon = () =>{
      navIcon.addEventListener('click', ()=> {
        navIcon.classList.toggle('open');
        mainMenu.classList.toggle('opened');
      });
    };
    toggleIcon();
  }
  render(){
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
