import React from 'react'

import Widget from './Widget'

export default ({ clicks, target, isComplete }) => {

    const percentage = (clicks >= target) ? 100 : (clicks/target) * 100;

    return <Widget title="Clicks" value={clicks} isComplete={isComplete} centerChildren={true}>
        <span className="viz-indicator" style={{ height: percentage, width: percentage }}></span>
    </Widget>
}