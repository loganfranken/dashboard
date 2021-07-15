import React from 'react'

import Widget from './Widget'

export default ({ seconds, isComplete }) => {

    const radius = 30;
    const buffer = 45;

    const angle = ((seconds % 60) / 60) * 360;
    const x = radius * Math.cos(angle) + buffer;
    const y = radius * Math.sin(angle) + buffer;

    return <Widget title="Time">
        <span className={'viz viz-circle' + (isComplete ? ' complete' : '')}>
            {seconds}
            <span className="viz-timer-hand" style={{ left: y, top: x }}></span>
        </span>
    </Widget>
}