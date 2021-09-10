import React from 'react'

import VizIndicatorType from '../VizIndicatorType'
import VizType from '../VizType'
import Widget from './Widget'

export default ({ seconds, target }) =>
    <Widget title="Time"
        value={seconds}
        target={target}
        vizType={VizType.Circle}
        vizIndicatorType={VizIndicatorType.RadialPositioned} />