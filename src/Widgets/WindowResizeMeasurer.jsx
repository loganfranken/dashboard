import React from 'react'

import Widget from './Widget'

export default ({ windowResizePercentage }) => {
    return <Widget title="Window Size" value={windowResizePercentage} measurement="%" />
}