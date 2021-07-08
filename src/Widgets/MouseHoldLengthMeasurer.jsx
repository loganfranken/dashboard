import React from 'react'

import Widget from './Widget'

export default ({ mouseHoldLength }) => {
    return <Widget title="Mouse Hold" value={mouseHoldLength} measurement="seconds" />
}