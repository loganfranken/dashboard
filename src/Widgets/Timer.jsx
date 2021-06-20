import React from 'react'

import Widget from './Widget'

export default ({ seconds }) => {

    let value = 0;
    let measurement = 'seconds';

    if(typeof seconds !== 'undefined' && seconds !== null)
    {
        if(seconds > 86400)
        {
            value = Math.floor(seconds / 86400);
            measurement = 'days';
        }
        else if(seconds > 3600)
        {
            value = Math.floor(seconds / 3600);
            measurement = 'hours';
        }
        else if(seconds > 60)
        {
            value = Math.floor(seconds / 60);
            measurement = 'minutes';
        }
        else
        {
            value = seconds;
        }

        // Remove the trailing "s" if it's a singular value
        if(value === 1)
        {
            measurement = measurement.split(0, measurement.length - 1)
        }
    }

    return <Widget title="Time on Dashboard" value={value} measurement={measurement} />
}