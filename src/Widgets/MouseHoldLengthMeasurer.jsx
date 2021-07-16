import React from 'react'

import Widget from './Widget'

export default ({ mouseHoldLength, target, isComplete }) => {

    const percentage = (mouseHoldLength >= target) ? 100 : (mouseHoldLength/target) * 100;

    return <Widget title="Mouse Hold" value={mouseHoldLength.toFixed(1)} isComplete={isComplete} customClassName="viz-click-counter">
        <span className="viz-click-counter-ticker" style={{ height: percentage, width: percentage }}></span>
    </Widget>
}