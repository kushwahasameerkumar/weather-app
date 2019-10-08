import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import Search from './components/Search';
import Weather from './components/Weather';

class App extends Component{
  state = {
      showWeather: false,
      city: ''
  }

  setCity = (city) => {
      this.setState({
          city: city
      })
  }

  setShowWeather = (previousWeather) => {
    this.setState({
        showWeather: !previousWeather
    })
  }

  render(){
    return (
        <div>
            { this.state.showWeather ? 
                <Weather setShowWeather={this.setShowWeather} city={this.state.city} /> :
                <Search setCity={this.setCity} setShowWeather={this.setShowWeather} /> 
            }
        </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
