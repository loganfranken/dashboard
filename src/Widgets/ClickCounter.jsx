import React from 'react'

import Widget from './Widget'

export default ({ clicks, target, isComplete }) => {

    const percentage = (clicks >= target) ? 100 : (clicks/target) * 100;

    return <Widget title="Clicks" value={clicks} isComplete={isComplete} customClassName="viz-click-counter">
        <span className="viz-click-counter-ticker" style={{ height: percentage, width: percentage }}></span>
    </Widget>
}