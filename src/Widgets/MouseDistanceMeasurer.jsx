import React from 'react'

import VizIndicatorType from '../VizIndicatorType'
import VizType from '../VizType'
import Widget from './Widget'

export default ({ mouseDistance, target, isComplete }) => {

    const percentage = 100 - ((mouseDistance >= target) ? 100 : (mouseDistance/target) * 100);

    return <Widget title="Mouse Distance"
        value={mouseDistance}
        isComplete={isComplete}
        vizType={VizType.CirclePair}
        vizIndicatorType={VizIndicatorType.Positioned}
        x={`${percentage}%`}
        y={`${percentage}%`} />
}