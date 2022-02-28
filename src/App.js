import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react';
import Foot from './components/Foot';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#16161d';
      document.body.style.color = 'white';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = '#16161d';
    }
  }

  return (
    <>
      {/* <Router> */}
        <Navbar title="TextTransformer" mode={mode} toggleMode={toggleMode} />
        <div className="container my-3">
          {/* <Switch>
            <Route exact path="/about">
              <About mode={mode} />
            </Route> */}
            {/* <Route exact path="/"> */}
              <TextForm mode={mode} heading="Try TextTransformer - Word counter, character counter, text to speech and much more..." />
            {/* </Route> */}
          {/* </Switch> */}
          <Foot/>
        </div>
      {/* </Router> */}
    </>
  )
}

export default App;