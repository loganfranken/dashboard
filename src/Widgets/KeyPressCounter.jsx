import React from 'react'

import Widget from './Widget'
import VizType from '../VizType'

export default ({ keyPresses, isComplete }) => {
    return <Widget title="Key Press" value={keyPresses} isComplete={isComplete} vizType={VizType.Square} />
}