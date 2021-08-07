import React from 'react'

import VizIndicatorType from '../VizIndicatorType'
import VizType from '../VizType'
import Widget from './Widget'

export default ({ mouseDistance, target, isComplete }) =>
    <Widget title="Mouse Distance"
        value={mouseDistance}
        target={target}
        isComplete={isComplete}
        vizType={VizType.Blank}
        vizIndicatorType={VizIndicatorType.MergingPair} />