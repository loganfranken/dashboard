import React from 'react'

import Widget from './Widget'

export default ({ seconds }) => {

    const radius = 30;
    const buffer = 45;

    const angle = ((seconds % 60) / 60) * 360;
    const x = radius * Math.cos(angle) + buffer;
    const y = radius * Math.sin(angle) + buffer;

    return <div className="panel widget">
        <h2>Time</h2>
        <span class="viz viz-timer">
            {seconds}
            <span className="viz-timer-hand" style={{ left: y, top: x }}></span>
        </span>
    </div>
}