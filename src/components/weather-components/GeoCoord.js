import React from 'react';

const GeoCoord = (props) => {
    return (
        <tr>
            <td>Geo Coordinates</td>
            <td>[{props.value}] </td>
        </tr>
    )
}

export default GeoCoord;