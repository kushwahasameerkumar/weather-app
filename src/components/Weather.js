import React, { Component } from 'react';
// import {GeoCoord, MaxTemp, MinTemp, Pressure, Sunrise, Sunset, Wind} from './weather-components/components';
import GeoCoord from './weather-components/GeoCoord'
import MaxTemp from './weather-components/MaxTemp'
import MinTemp from './weather-components/MinTemp'
import Pressure from './weather-components/Pressure'
import Sunrise from './weather-components/Sunrise'
import Sunset from './weather-components/Sunset'
import Wind from './weather-components/Wind'
import Humidity from './weather-components/Humidity';
import Temp from './weather-components/Temp';
import WeatherCondition from './weather-components/WeatherCondition'

class Weather extends Component{
    state = {
        data: '',
        loading: true,
        weather: {
            wind: '',
            sun: '',
            pressure: '',
            temp: ''
        }
    }

    componentDidMount(){
            this.fetchData(this.props.city);
    }

    fetchData(city){
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.props.city}&units=metric&APPID=1f83bb8675c26e742fe06a8c59e6d2e4`)
        .then(data => data.json())
        .then(data => {
            this.setState({
                weather: {
                    wind: data.wind,
                    sun: data.sys,
                    condition: data.weather[0].main,
                    pressure: data.main.pressure,
                    temp: Math.round(data.main.temp),
                    temp_max: data.main.temp_max,
                    temp_min: data.main.temp_min,
                    humidity: data.main.humidity,
                    city: data.name ,
                    coord: data.coord.lat + ", " + data.coord.lon,
                    timezone: data.timezone
                },
                loading: false
            })
        });
    }

    getTime(unixTimestamp, timezone){
        const dateObj = new Date( (unixTimestamp+timezone) * 1000); 
        const utcString = dateObj.toUTCString(); 
        const time = utcString.slice(-11, -4); 
        return time;
    }

    render(){
        const style = {
            marginBotton: 0
        }
        const weather = this.state.weather;
        return (
            <div>{console.log(weather.temp)}
            <div className="card mb-3 mt-3" >
                    <div className="row no-gutters">
                      <div className="col-md-4">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-bh1-lEVvdXEUySw6xRiMQ5CJ524ykGnYm8G0e0NI3sPmyEZA" className="card-img" alt="..." />
                            <Temp value={weather.temp} />
                            <WeatherCondition value={weather.condition} />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title" style={style}>Weather in {weather.city}, {weather.sun.country}</h5>
                          <p className="card-text"><small className="text-muted">Last updated 10 mins ago</small></p>
                          <table className="table col-md-6 col-lg-6 col-sm-12 ">
                                
                                <tbody>
                                  <Wind value={weather.wind.speed} />
                                  <Pressure value={weather.pressure} />
                                  <Humidity value={weather.humidity} />
                                  <MaxTemp value={weather.temp_max} />
                                  <MinTemp value={weather.temp_min} />
                                  <Sunrise value={0+this.getTime(weather.sun.sunrise, weather.timezone)} />
                                  <Sunset value={1+this.getTime(weather.sun.sunset, weather.timezone)} />
                                  <GeoCoord value={weather.coord} />
                                </tbody>
                              </table>
                        </div>
                      </div>
                    </div>
            </div>
            <div className="row">
                <div className="col">   
                    <p className="text-center"><a href="#" onClick={e => this.props.setShowWeather(true)}>Go back</a></p>
                </div>
            </div>

            </div>
        )
    }
}

export default Weather;