import React from 'react';

const Temp = (props) => {
    return (
        <div className="row">
            <div className="col">
                <h2 className="card-text text-center">{props.value} °C</h2>
            </div>
        </div>
    )
}

export default Temp;