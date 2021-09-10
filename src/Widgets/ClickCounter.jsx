import React from 'react'

import VizIndicatorType from '../VizIndicatorType'
import VizType from '../VizType'
import Widget from './Widget'

export default ({ clicks, target }) =>
    <Widget title="Clicks"
        value={clicks}
        target={target}
        vizType={VizType.Circle}
        vizIndicatorType={VizIndicatorType.Growing} />