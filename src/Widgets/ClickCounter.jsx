import React from 'react'

import Widget from './Widget'

export default ({ clicks, target, isComplete }) => {

    const percentage = (clicks >= target) ? 100 : (clicks/target) * 100;

    return <Widget title="Clicks">
        <span className={'viz viz-circle viz-click-counter' + (isComplete ? ' complete' : '')}>
            {clicks}
            <span className="viz-click-counter-ticker" style={{ height: percentage, width: percentage }}></span>
        </span>
    </Widget>
}