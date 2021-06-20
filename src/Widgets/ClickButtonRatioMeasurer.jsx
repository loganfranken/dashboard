import React from 'react'

import Widget from './Widget'

export default ({ clickButtonRatio }) => {
    return <Widget title="Click button ratio" value={clickButtonRatio} measurement="left/right clicks" />
}