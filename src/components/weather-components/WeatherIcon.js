import React, { Component } from 'react'

export default class WeatherIcon extends Component {
    render() {
        const name = this.props.name;
        return (
            <div>
                <img src={`./images/weather/${name}.png`} 
                className="card-img" 
                alt={name} />
            </div>
        )
    }
}
