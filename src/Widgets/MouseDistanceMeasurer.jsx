import React from 'react'

import VizIndicatorType from '../VizIndicatorType'
import VizType from '../VizType'
import Widget from './Widget'

export default ({ mouseDistance, target }) =>
    <Widget title="Mouse Distance"
        value={mouseDistance}
        target={target}
        vizType={VizType.Blank}
        vizIndicatorType={VizIndicatorType.MergingPair} />