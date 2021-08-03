import React from 'react'

import VizIndicatorType from '../VizIndicatorType'
import VizType from '../VizType'
import Widget from './Widget'

export default ({ seconds, isComplete }) =>
    <Widget title="Time"
        value={seconds}
        isComplete={isComplete}
        vizType={VizType.Circle}
        vizIndicatorType={VizIndicatorType.RadialPositioned} />