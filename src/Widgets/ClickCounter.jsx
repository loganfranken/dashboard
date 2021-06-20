import React from 'react'

import Widget from './Widget'

export default ({ clicks }) => {
    return <Widget title="Number of Clicks" value={clicks} measurement="clicks" />
}