import React from 'react'

export default ({ title, value, isComplete, customClassName, children }) => <div className="panel widget">
    <h2>{title}</h2>
    <span className={'viz viz-circle' + (customClassName ? ' ' + customClassName : '') + (isComplete ? ' complete' : '')}>
        {value}
        {children}
    </span>
</div>