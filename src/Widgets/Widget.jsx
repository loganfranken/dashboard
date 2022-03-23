import React from 'react'

import VizIndicatorType from '../VizIndicatorType'
import VizType from '../VizType'

export default ({ title, value, target, isComplete, vizType, vizIndicatorType }) => {

    let vizCssClassName = '';
    let centerChildren = false;
    let hasMultipleChildren = false;

    let vizIndicatorStyleProps = {};
    let vizIndicatorStylePropsLeft = {};
    let vizIndicatorStylePropsRight = {};

    switch(vizType)
    {
        case VizType.Blank:
            vizCssClassName = 'viz-blank';
            break;

        case VizType.Circle:
            vizCssClassName = 'viz-circle';
            break;

        case VizType.CirclePair:
            vizCssClassName = 'viz-circle-pair';
            break;

        case VizType.HalfCircle:
            vizCssClassName = 'viz-half-circle';
            break;

        case VizType.Square:
            vizCssClassName = 'viz-square';
            break;

        case VizType.SquareOutline:
            vizCssClassName = 'viz-square-outline';
            break;
    }

    let percentage = (isComplete || value >= target) ? 100 : (value/target) * 100;
    let cappedPercentage = 0;

    switch(vizIndicatorType)
    {
        case VizIndicatorType.RadialPositioned:
            const radius = 30;
            const buffer = 45;
        
            const angle = ((value % 60) / 60) * 360;
            const x = radius * Math.cos(angle) + buffer;
            const y = radius * Math.sin(angle) + buffer;

            vizIndicatorStyleProps = { left: y, top: x };
            break;

        case VizIndicatorType.Growing:
            centerChildren = true;
            vizIndicatorStyleProps = { height: `${percentage}%`, width: `${percentage}%` };
            break;

        case VizIndicatorType.Multiple:
            cappedPercentage = (100 / Math.sqrt(target));
            hasMultipleChildren = true;
            vizIndicatorStyleProps = { height: `${cappedPercentage}%`, width: `${cappedPercentage}%` };
            break;

        case VizIndicatorType.MergingPair:
            cappedPercentage = (percentage/100) * 80;
            vizIndicatorStylePropsLeft = { left: `${cappedPercentage}%`, top: `${cappedPercentage}%` };
            vizIndicatorStylePropsRight = { left: '80%', top: '80%' };
            break;

        case VizIndicatorType.Gauge:
            const degree = ((percentage/100) * 180) - 90;
            vizIndicatorStyleProps = { transform: `rotate(${degree}deg)` }
            break;

        case VizIndicatorType.EquilibriumPair:
            cappedPercentage = (percentage/100) * (40);
            vizIndicatorStylePropsLeft = { left: 0, top: 'inherit', bottom: `${cappedPercentage}%` };
            vizIndicatorStylePropsRight = { right: 0, top: `${cappedPercentage}%`, bottom: 'inherit' };
            break;
    }

    return <div className="widget">
        <h2>{title}</h2>
        <span className={'viz ' + vizCssClassName + (centerChildren ? ' viz-center-children' : '') + (hasMultipleChildren ? ' viz-multiple-children' : '') + (percentage >= 100 ? ' complete' : '')}>
            {value}
            {vizIndicatorType === VizIndicatorType.Multiple
                ? [...Array(Math.min(value, target))].map((e, i) => <span className="viz-indicator" key={i} style={vizIndicatorStyleProps}></span>)

            : (vizIndicatorType === VizIndicatorType.EquilibriumPair || vizIndicatorType == VizIndicatorType.MergingPair)
                ? <React.Fragment>
                    <span className="viz-indicator viz-indicator-left" style={vizIndicatorStylePropsLeft}></span>
                    <span className="viz-indicator viz-indicator-right" style={vizIndicatorStylePropsRight}></span>
                  </React.Fragment>

            : (vizIndicatorType === VizIndicatorType.Cross)
                ? <React.Fragment>
                <span className="viz-indicator viz-indicator-cross viz-indicator-left"></span>
                <span className="viz-indicator viz-indicator-cross viz-indicator-right"></span>
                </React.Fragment>

            : <span className="viz-indicator" style={vizIndicatorStyleProps}></span>
            }
        </span>
    </div>

}