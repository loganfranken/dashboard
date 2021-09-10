import React from 'react'

import Widget from './Widget'
import VizIndicatorType from '../VizIndicatorType'
import VizType from '../VizType'

export default ({ mouseVelocity, target }) =>
    <Widget title="Mouse Velocity"
        value={mouseVelocity.toFixed(1)}
        target={target}
        vizType={VizType.HalfCircle}
        vizIndicatorType={VizIndicatorType.Gauge} />