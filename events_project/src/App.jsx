import React, { useState } from 'react';
// import { BrowserRouter, Route } from 'react-router-dom';
import './App.scss'
import Header from './components/Header/Header'
import MapComponent from './components/Map/MapComponent';

function App() {
  const [state,setState] = useState(true)

  const changeState = () => {
    setState(!state)
    console.log(!state)
  }
  return (
    <div className="App">
      <Header />
        <div className="content">
          <div className="can-toggle demo-rebrand-1">
            <input id="d" type="checkbox" />
              <label for="d">
                <div className="can-toggle__switch" data-checked="Events" data-unchecked="Map" onClick = {changeState}/>
                <div className="can-toggle__label-text"/>
              </label>
          </div>
        </div>
      {state === true ?
      <MapComponent/> :
      <div className = 'eventsBlock'>
        There will be Events
      </div>}
      
     
    </div>
  );
}

export default App;
