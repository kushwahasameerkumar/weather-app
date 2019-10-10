import React, { Component } from 'react';
import WeatherIcon from './weather-components/WeatherIcon';
import Temp from './weather-components/Temp';
import WeatherCondition from './weather-components/WeatherCondition';
import UserLocation from './weather-components/UserLocation';


class Search extends Component{

    state = {
        weather: {
            city: '',
            temp: '',
            humadity: '',
            condition: '',
            country: '',
            weatherIcon: 'clear',
        },
        cityFound: false,
        loading: true
    }

    componentDidMount(){
        this.getWeatherData();
    }

    getWeatherData(){
        fetch('https://ipinfo.io/?token=de858adf8645eb')
        .then(data => data.json())
        .then( data => {
            console.log(data.city);
            this.fetchData(data.city);
        })
    }

    fetchData(city){
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=1f83bb8675c26e742fe06a8c59e6d2e4`)
        .then(data => data.json())
        .then(data => {
            if(data.cod === 200){
                this.setState({cityFound: true});
            }else{
                this.setState({cityFound: false});
            }
            return data;
        })
        .then(data => {
            if(this.state.cityFound){
                this.setState({
                    weather: {
                        condition: data.weather[0].main,
                        temp: Math.round(data.main.temp),
                        humidity: data.main.humidity,
                        city: data.name ,
                        country: data.sys.country,
                        weatherIcon: data.weather[0].main.toString().toLowerCase()
                    },
                    loading: false
                })
            }
        });
    }

    render(){
        const style = {
            maxWidth: '378px'
        }

        return(
            <div className="row mt-5">
                <div className="card border-light mb-3">
                    <div className="row no-gutters">
                        <div className="col-md-4 border-primary">
                            <WeatherIcon name={this.state.weather.weatherIcon} />
                            {this.state.loading ?
                                null 
                                : 
                                <div>
                                    <Temp value={this.state.weather.temp} />
                                    <WeatherCondition value={this.state.weather.condition} />
                                    <UserLocation city={this.state.weather.city} country={this.state.weather.country} setCty={this.props.setCity} setShowWeather={this.props.setShowWeather} />
                                </div>
                            }
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <div className="card border-light text-center mx-auto" style={style}>                    
                                    <div className="card-header">
                                            Know the weather around
                                    </div>
                                    <div className="card-body">
                                                <form className="form-inline">
                                                    <div className="form-group mx-sm-3 mb-2">
                                                            <label htmlFor="City" className="sr-only">City</label>
                                                            <input type="text" className="form-control" id="inputPassword2" placeholder={`${this.state.weather.city} / City`}
                                                                onChange={e => this.props.setCity(e.target.value)}
                                                            />
                                                    </div>
                                                    <button type="submit" className="btn btn-primary mb-2"
                                                        onClick={(e)=> this.props.setShowWeather(true)}
                                                    >Search</button>
                                                </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Search;