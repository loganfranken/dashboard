import React from 'react'

export default ({ title, value, isComplete, centerChildren, children }) => <div className="panel widget">
    <h2>{title}</h2>
    <span className={'viz viz-circle' + (centerChildren ? ' viz-center-children' : '') + (isComplete ? ' complete' : '')}>
        {value}
        {children}
    </span>
</div>