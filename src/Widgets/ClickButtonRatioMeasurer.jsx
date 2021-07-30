import React from 'react'

import Widget from './Widget'
import VizIndicatorType from '../VizIndicatorType'
import VizType from '../VizType'

export default ({ clickButtonRatio, target, isComplete }) =>
    <Widget title="Click Ratio"
        value={clickButtonRatio}
        target={target}
        isComplete={isComplete}
        vizType={VizType.Blank}
        vizIndicatorType={VizIndicatorType.CircleEquilibrium} />