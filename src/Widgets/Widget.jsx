import React from 'react'

export default ({ title, value, measurement }) => <div className="panel widget">
    <h2>{title}</h2>
    <span className="value">{value}</span>
    <span className="measurement">{measurement}</span>
</div>