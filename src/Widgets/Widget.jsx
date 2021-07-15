import React from 'react'

export default ({ title, children }) => <div className="panel widget">
    <h2>{title}</h2>
    {children}
</div>