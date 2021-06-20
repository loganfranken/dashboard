import React from 'react'

import Widget from './Widget'

export default ({ windowCloses }) => {
    return <Widget title="Window Closes" value={windowCloses} measurement="closes" />
}