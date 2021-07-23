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

        case VizType.Square:
            vizCssClassName = 'viz-square';
            break;
    }

    switch(vizIndicatorType)
    {
        case VizIndicatorType.Positioned:
            vizIndicatorStyleProps = { left: y, top: x };
            break;

        case VizIndicatorType.Centered:
            centerChildren = true;
            vizIndicatorStyleProps = { height, width };
            break;

        case VizIndicatorType.Multiple:
            hasMultipleChildren = true;
            vizIndicatorStyleProps = { height, width };
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