import React from 'react';

const MinTemp = (props) => {
    return (
        <tr>
            <td>Min Temp</td>
            <td>{props.value} °C</td>
        </tr>
    )
}

export default MinTemp;