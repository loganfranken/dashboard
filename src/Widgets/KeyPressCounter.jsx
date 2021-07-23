import React from 'react'

import Widget from './Widget'
import VizType from '../VizType'

export default ({ keyPresses, target, isComplete }) => {

    const percentage = (100 / Math.sqrt(target));

    return <Widget title="Key Press"
        value={keyPresses}
        target={target}
        isComplete={isComplete}
        vizType={VizType.Square}
        width={`${percentage}%`}
        height={`${percentage}%`} />
}