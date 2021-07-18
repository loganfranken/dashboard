import React from 'react'
import VizType from '../VizType'

export default ({ title, value, isComplete, vizType }) => {

    let vizCssClassName = '';
    let centerChildren = false;
    let vizIndicatorStyleProps = {};

    switch(vizType)
    {
        case VizType.CircleSpin:
            vizCssClassName = 'viz-circle';
            vizIndicatorStyleProps = 
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


/*
<span className="viz-indicator" style={{ left: y, top: x }}></span>
*/