import React from 'react'
import VizType from '../VizType';

import Widget from './Widget'

export default ({ seconds, isComplete }) => {

    const radius = 30;
    const buffer = 45;

    const angle = ((seconds % 60) / 60) * 360;
    const x = radius * Math.cos(angle) + buffer;
    const y = radius * Math.sin(angle) + buffer;

    return <Widget title="Time" value={seconds} isComplete={isComplete} vizType={VizType.CircleSpin} />
}