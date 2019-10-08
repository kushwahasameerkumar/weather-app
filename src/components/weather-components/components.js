import React, { Component } from 'react';

const GeoCoord = (props) => {
    return (
        <tr>
            <td>Geo Coordinates</td>
            <td>{this.props.value} </td>
        </tr>
    )
}

const MaxTemp = (props) => {
    return (
        <tr>
            <td>Max Temp</td>
            <td>{this.props.value} °C</td>
        </tr>
    )
}

const MinTemp = (props) => {
    return (
        <tr>
            <td>Min Temp</td>
            <td>{this.props.value} °C</td>
        </tr>
    )
}

const Pressure = (props) => {
    return (
        <tr>
            <td>Pressure</td>
            <td>{this.props.value} hpa</td>
        </tr>
    )
}

const Sunrise = (props) => {
    return (
        <tr>
            <td>Sunrise</td>
            <td>{this.props.value} </td>
        </tr>
    )
}

const Sunset = (props) => {
    return (
        <tr>
            <td>Sunset</td>
            <td>{this.props.value} </td>
        </tr>
    )
}



const Wind = (props) => {
    return (
        <tr>
            <td>Wind</td>
            <td>{this.props.value} m/s</td>
        </tr>
    )
}

export { GeoCoord, MaxTemp, MinTemp, Pressure, Sunrise, Sunset, Wind };