import React from 'react'

import Widget from './Widget'

export default ({ mouseHoldLength, target, isComplete }) => {

    const percentage = (mouseHoldLength >= target) ? 100 : (mouseHoldLength/target) * 100;

    return <Widget title="Mouse Hold" value={mouseHoldLength.toFixed(1)} isComplete={isComplete} centerChildren={true}>
        <span className="viz-indicator" style={{ height: percentage, width: percentage }}></span>
    </Widget>
}