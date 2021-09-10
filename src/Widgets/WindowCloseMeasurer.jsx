import React from 'react'

import Widget from './Widget'
import VizIndicatorType from '../VizIndicatorType'
import VizType from '../VizType'

export default ({ windowCloses, target }) =>
    <Widget title="Window Closes"
        value={windowCloses}
        target={target}
        vizType={VizType.Blank}
        vizIndicatorType={VizIndicatorType.Cross} />