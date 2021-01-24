import React from 'react';
import logo from './nust-logo.png';
import './style.css';
import StudentsList from './components/StudentsList';
import AddStudent from './components/AddStudent';

class App extends React.Component {

  constructor(props) {
      super(props);
  }

  render() {
    return (
        <div className="app">
          <div className="container page-header">
            <img src={logo} className="app-logo" alt="logo" />
            <h2>Student Management System</h2>
          </div>
          <StudentsList />
          <AddStudent />
        </div>
      );
  }
}

export default App;
