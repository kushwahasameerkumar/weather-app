import React from 'react';

const WeatherCondition = (props) => {
    return (
        <div className="row">
            <div className="col">
                <h4 className="card-text text-center">{props.value}</h4>
            </div>
        </div>
    )
}

export default WeatherCondition;