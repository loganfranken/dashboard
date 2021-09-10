import React from 'react'

import Widget from './Widget'
import VizType from '../VizType'
import VizIndicatorType from '../VizIndicatorType'

export default ({ keyPresses, target }) =>
    <Widget title="Key Press"
        value={keyPresses}
        target={target}
        vizType={VizType.Square}
        vizIndicatorType={VizIndicatorType.Multiple} />