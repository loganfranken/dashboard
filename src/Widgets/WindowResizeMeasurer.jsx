import React from 'react'

import Widget from './Widget'
import VizIndicatorType from '../VizIndicatorType'
import VizType from '../VizType'

export default ({ windowResizePercentage, target, isComplete }) =>
        <Widget title="Window Size"
            value={windowResizePercentage}
            target={target}
            isComplete={isComplete}
            vizType={VizType.SquareOutline}
            vizIndicatorType={VizIndicatorType.SquareGrowing} />