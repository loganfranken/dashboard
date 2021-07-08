import React from 'react'

import Widget from './Widget'

export default ({ mouseVelocity }) => {
    return <Widget title="Mouse Velocity" value={mouseVelocity.toFixed(1)} measurement="pixels/second" />
}