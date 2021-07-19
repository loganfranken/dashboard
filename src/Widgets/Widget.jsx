import React from 'react'

import VizIndicatorType from '../VizIndicatorType';
import VizType from '../VizType'

export default ({ title, value, isComplete, vizType, vizIndicatorType, x, y }) => {

    let vizCssClassName = '';
    let centerChildren = false;
    let vizIndicatorStyleProps = {};

    switch(vizType)
    {
        case VizType.Circle:
            vizCssClassName = 'viz-circle';
            break;
    }

    switch(vizIndicatorType)
    {
        case VizIndicatorType.Positioned:
            vizIndicatorStyleProps = { left: y, top: x };
            break;
    }

    return <div className="panel widget">
        <h2>{title}</h2>
        <span className={'viz ' + vizCssClassName + (centerChildren ? ' viz-center-children' : '') + (isComplete ? ' complete' : '')}>
            {value}
            <span className="viz-indicator" style={vizIndicatorStyleProps}></span>
        </span>
    </div>

}