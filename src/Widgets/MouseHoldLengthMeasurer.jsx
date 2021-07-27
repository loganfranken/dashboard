import React from 'react'

import Widget from './Widget'
import VizIndicatorType from '../VizIndicatorType'
import VizType from '../VizType'

export default ({ mouseHoldLength, target, isComplete }) =>
    <Widget title="Mouse Hold"
        value={mouseHoldLength.toFixed(1)}
        target={target}
        isComplete={isComplete}
        vizType={VizType.Circle}
        vizIndicatorType={VizIndicatorType.CircleGrowing} />