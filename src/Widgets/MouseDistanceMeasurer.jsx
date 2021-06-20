import React from 'react'

import Widget from './Widget'

export default ({ mouseDistance }) => {

    let value = 0;
    let measurement = 'pixels';

    if(typeof mouseDistance !== 'undefined' && mouseDistance !== null)
    {
        if(mouseDistance > 100000)
        {
            value = Math.floor(mouseDistance / 100000);
            measurement = '100k pixels';
        }
        else if(mouseDistance > 10000)
        {
            value = Math.floor(mouseDistance / 10000);
            measurement = '10k pixels';
        }
        else if(mouseDistance > 1000)
        {
            value = Math.floor(mouseDistance / 1000);
            measurement = 'thousand pixels';
        }
        else if(mouseDistance > 100)
        {
            value = Math.floor(mouseDistance / 100);
            measurement = 'hundred pixels';
        }
        else
        {
            value = mouseDistance;
        }
    }

    return <Widget title="Mouse Distance" value={value} measurement={measurement} />
}