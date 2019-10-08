import React from 'react';

const Wind = (props) => {
    return (
        <tr>
            <td>Wind</td>
            <td>{props.value} m/s</td>
        </tr>
    )
}

export default Wind;