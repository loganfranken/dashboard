import React from 'react'

import VizIndicatorType from '../VizIndicatorType'
import VizType from '../VizType'

export default ({ title, value, target, isComplete, vizType, vizIndicatorType, x, y, height, width }) => {

    let vizCssClassName = '';
    let centerChildren = false;
    let hasMultipleChildren = false;
    let vizIndicatorStyleProps = {};

    switch(vizType)
    {
        case VizType.Circle:
            vizCssClassName = 'viz-circle';
            break;

        case VizType.CirclePair:
            vizCssClassName = 'viz-circle-pair';
            break;

        case VizType.Square:
            vizCssClassName = 'viz-square';
            break;
    }

    let percentage = 0;

    switch(vizIndicatorType)
    {
        case VizIndicatorType.CirclePositioned:
            const radius = 30;
            const buffer = 45;
        
            const angle = ((value % 60) / 60) * 360;
            const x = radius * Math.cos(angle) + buffer;
            const y = radius * Math.sin(angle) + buffer;

            vizIndicatorStyleProps = { left: y, top: x };
            break;

        case VizIndicatorType.CircleGrowing:
            percentage = (value >= target) ? 100 : (value/target) * 100;
            centerChildren = true;
            vizIndicatorStyleProps = { height: `${percentage}%`, width: `${percentage}%` };
            break;

        case VizIndicatorType.Multiple:
            percentage = (100 / Math.sqrt(target));
            hasMultipleChildren = true;
            vizIndicatorStyleProps = { height: `${percentage}%`, width: `${percentage}%` };
            break;

        case VizIndicatorType.CirclePair:
            percentage = 100 - ((value >= target) ? 100 : (value/target) * 100);
            vizIndicatorStyleProps = { left: '-' + percentage, top: '-' + percentage }
            break;
    }

    return <div className="panel widget">
        <h2>{title}</h2>
        <span className={'viz ' + vizCssClassName + (centerChildren ? ' viz-center-children' : '') + (hasMultipleChildren ? ' viz-multiple-children' : '') + (isComplete ? ' complete' : '')}>
            {value}
            {vizIndicatorType === VizIndicatorType.Multiple
                ? [...Array(Math.min(value, target))].map((e, i) => <span className="viz-indicator" style={vizIndicatorStyleProps}></span>)
                : <span className="viz-indicator" style={vizIndicatorStyleProps}></span>
            }
        </span>
    </div>

}