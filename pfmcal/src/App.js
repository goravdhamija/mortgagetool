import React from 'react';
import logo from './pacific-financial-logo.jpg';
import './App.css';

function App() {
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <UserInputsComponent />
      </header>
    </div>
  );
}

function UserInputsComponent() {
  const [personName,setPersonName] = React.useState('');

  return (
    <div className="UserInputs">
         
            <h1>Pacific Financial Mortgage Calculator {personName}</h1>
            <input type="text" onChange={(e) => setPersonName(e.target.value)}/>
    
    </div>
  );
}

export default App;
