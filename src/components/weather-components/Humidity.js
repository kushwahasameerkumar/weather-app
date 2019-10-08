import React from 'react';

const Humidity = (props) => {
    return (
        <tr>
            <td>Humidity</td>
            <td>{props.value} %</td>
        </tr>
    )
}

export default Humidity;