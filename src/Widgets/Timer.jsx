import React from 'react'

import VizIndicatorType from '../VizIndicatorType'
import VizType from '../VizType'
import Widget from './Widget'

export default ({ seconds, target, isComplete }) =>
    <Widget title="Time"
        value={seconds}
        target={target}
        isComplete={isComplete}
        vizType={VizType.Circle}
        vizIndicatorType={VizIndicatorType.RadialPositioned} />