import React from 'react'

import Widget from './Widget'
import VizType from '../VizType'
import VizIndicatorType from '../VizIndicatorType'

export default ({ keyPresses, target, isComplete }) =>
    <Widget title="Key Press"
        value={keyPresses}
        target={target}
        isComplete={isComplete}
        vizType={VizType.Square}
        vizIndicatorType={VizIndicatorType.Multiple} />