import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'fontawesome';
import './scss/style.scss';

// import MainNav from './components/common/MainNav';
import Project from './components/projects/Project';

class App extends React.Component {
  render() {
    return (
      <div>
        <Project />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
