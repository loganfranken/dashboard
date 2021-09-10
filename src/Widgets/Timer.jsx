import React from 'react'

import VizIndicatorType from '../VizIndicatorType'
import VizType from '../VizType'
import Widget from './Widget'

export default ({ seconds }) =>
    <Widget title="Time"
        value={seconds}
        vizType={VizType.Circle}
        vizIndicatorType={VizIndicatorType.RadialPositioned} />