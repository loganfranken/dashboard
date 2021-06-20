import React from 'react'

import Widget from './Widget'

export default ({ keyPresses }) => {
    return <Widget title="Number of Key Presses" value={keyPresses} measurement="presses" />
}