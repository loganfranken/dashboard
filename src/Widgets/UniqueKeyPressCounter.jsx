import React from 'react'

import Widget from './Widget'
import VizType from '../VizType'
import VizIndicatorType from '../VizIndicatorType'

export default ({ uniqueKeyPresses, target }) =>
    <Widget title="Unique Key Press"
        value={uniqueKeyPresses}
        target={target}
        vizType={VizType.Square}
        vizIndicatorType={VizIndicatorType.Multiple} />