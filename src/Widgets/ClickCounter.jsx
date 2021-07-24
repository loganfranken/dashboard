import React from 'react'

import VizIndicatorType from '../VizIndicatorType'
import VizType from '../VizType'
import Widget from './Widget'

export default ({ clicks, target, isComplete }) => {

    const percentage = (clicks >= target) ? 100 : (clicks/target) * 100;

    return <Widget title="Clicks"
        value={clicks}
        isComplete={isComplete}
        vizType={VizType.Circle}
        vizIndicatorType={VizIndicatorType.Centered}
        width={`${percentage}%`}
        height={`${percentage}%`} />
}