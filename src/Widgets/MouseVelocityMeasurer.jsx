import React from 'react'

import Widget from './Widget'

export default ({ topMouseVelocity }) => {

    const value = Math.floor(topMouseVelocity);

    return <Widget title="Top Mouse Velocity" value={value} measurement="pixels/second" />
}