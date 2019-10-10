import React from 'react';

const UserLocation = (props) => {
    const locationStyle = {
        fontSize: 12
    };
    return (
        <div className="row">
            <div className="col">
                <br></br>
                <p className="card-text text-center" style={locationStyle} >
                    {props.city}, {props.country}
                    <button type="button" className="btn btn-link" style={locationStyle} 
                        onClick={e => {
                            props.setCty(props.city);
                            props.setShowWeather(true);
                        }
                    }> 
                        more 
                    </button>
                </p>
            </div>
        </div>
    )
}

export default UserLocation;