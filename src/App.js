import React, { useState } from 'react';
import './App.css';
import Search from './components/Search';
import Weather from './components/Weather';

// const state = {
//   showWeather: false
// }

function App() {
  const [showWeather, setShowWeather] = useState(false);
  const [city, setCity] = useState(null);
  const [data, setData] = useState(null);
  return (
    <div>
      { showWeather ? 
        <Weather /> :
        <Search setCity={setCity}/> 
      }
    </div>
  );
}

export default App;
