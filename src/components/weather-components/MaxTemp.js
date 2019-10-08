import React from 'react';

const MaxTemp = (props) => {
    return (
        <tr>
            <td>Max Temp</td>
            <td>{props.value} °C</td>
        </tr>
    )
}

export default MaxTemp;