import React from 'react'

import Widget from './Widget'

export default ({ topMouseHoldLength }) => {
    return <Widget title="Top Mouse Hold Length" value={topMouseHoldLength} measurement="seconds" />
}