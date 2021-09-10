import React from 'react'

import Widget from './Widget'
import VizIndicatorType from '../VizIndicatorType'
import VizType from '../VizType'

export default ({ windowResizePercentage, target }) =>
        <Widget title="Window Size"
            value={windowResizePercentage}
            target={target}
            vizType={VizType.SquareOutline}
            vizIndicatorType={VizIndicatorType.Growing} />