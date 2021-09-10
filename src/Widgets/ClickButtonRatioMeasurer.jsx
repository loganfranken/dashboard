import React from 'react'

import Widget from './Widget'
import VizIndicatorType from '../VizIndicatorType'
import VizType from '../VizType'

export default ({ clickButtonRatio, target }) =>
    <Widget title="Click Ratio"
        value={clickButtonRatio}
        target={target}
        vizType={VizType.Blank}
        vizIndicatorType={VizIndicatorType.EquilibriumPair} />