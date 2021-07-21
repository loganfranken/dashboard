import React from 'react'
import VizIndicatorType from '../VizIndicatorType'
import VizType from '../VizType'

import Widget from './Widget'

export default ({ mouseHoldLength, target, isComplete }) => {

    const percentage = (mouseHoldLength >= target) ? 100 : (mouseHoldLength/target) * 100;

    return <Widget title="Mouse Hold"
        value={mouseHoldLength.toFixed(1)}
        isComplete={isComplete}
        vizType={VizType.Circle}
        vizIndicatorType={VizIndicatorType.Centered}
        width={`${percentage}%`}
        height={`${percentage}%`} />
}