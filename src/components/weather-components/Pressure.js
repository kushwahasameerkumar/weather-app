import React from 'react';

const Pressure = (props) => {
    return (
        <tr>
            <td>Pressure</td>
            <td>{props.value} hPa</td>
        </tr>
    )
}

export default Pressure;