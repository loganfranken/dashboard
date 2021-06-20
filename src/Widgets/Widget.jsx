import React from 'react'

export default ({ title, value, measurement }) => <div className="panel widget">
    <h2>{title}</h2>
    <span class="value">{value}</span>
    <span class="measurement">{measurement}</span>
</div>