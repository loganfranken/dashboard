import React from 'react'

import VizIndicatorType from '../VizIndicatorType'
import VizType from '../VizType'
import Widget from './Widget'

export default ({ mouseHoldLength, target, isComplete }) =>
    <Widget title="Mouse Hold"
        value={mouseHoldLength.toFixed(1)}
        target={target}
        isComplete={isComplete}
        vizType={VizType.Circle}
        vizIndicatorType={VizIndicatorType.Growing} />