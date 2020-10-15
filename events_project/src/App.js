import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import MapComponent from './components/Map/MapComponent';

function App() {
  return (
    <div className="App"> 
      <Header/>
      <MapComponent/>
    </div>
  );
}

export default App;
