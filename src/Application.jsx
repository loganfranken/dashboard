import React, { useEffect, useState } from 'react'
import { hot } from 'react-hot-loader/root'

import analyze from '!./analyze'

import ClickCounterWidget from './Widgets/ClickCounterWidget'
import TimerWidget from './Widgets/TimerWidget'

export default hot(() => {

  const [summary, updateUserBehaviorSummary] = useState({});
  useEffect(() => { analyze(updateUserBehaviorSummary); }, []);

  return <React.Fragment>
    <ClickCounterWidget clicks={summary.clicks} />
    <TimerWidget seconds={summary.seconds} />
  </React.Fragment>

});