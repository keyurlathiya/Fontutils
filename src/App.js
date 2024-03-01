// import { type } from '@testing-library/user-event/dist/type';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
// import About from './components/About';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
// import { Switch, Route } from 'react-router-dom';
// import { BrowserRouter as Router } from 'react-router-dom';



// import About from './components/About';

function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("dark mode has been enable", "success");
      // setInterval(() => {
      //   document.title = 'Fontutils is amazing mode';
      // }, 2000);

      // setInterval(() => {
      //   document.title = 'install Fontutils now';
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enable", "success");
    }
  }

  return (
    <>
    {/* <Router> */}
    <Navbar title="Fontutils"  Abouts="Abouts Us" mode={mode} toggleMode={toggleMode}  />
    <Alert alert ={alert}/>
    {/* <Navbar/> */}
    <div className="container my-3">
    {/* <Switch>
          <Route path="/about">
            <About/>
          </Route> */}
          {/* <Route path="/"> */}
            <TextForm showAlert={showAlert} heading="Enter The Text Below" mode={mode}/>  
          {/* </Route>
    </Switch> */}
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
