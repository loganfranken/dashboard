import React from 'react'

import Widget from './Widget'

export default ({ uniqueKeyPresses }) => {
    return <Widget title="Unique Key Presses" value={uniqueKeyPresses} measurement="unique keys" />
}