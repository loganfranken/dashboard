import React from 'react'

import Widget from './Widget'
import VizType from '../VizType'
import VizIndicatorType from '../VizIndicatorType'

export default ({ uniqueKeyPresses, target, isComplete }) =>
    <Widget title="Unique Key Press"
        value={uniqueKeyPresses}
        target={target}
        isComplete={isComplete}
        vizType={VizType.Square}
        vizIndicatorType={VizIndicatorType.Multiple} />