import React, { useEffect, useState } from 'react'
import { hot } from 'react-hot-loader/root'

import getUserBehaviorSummary from '!./getUserBehaviorSummary'

import ClickCounterWidget from './Widgets/ClickCounterWidget'
import LocationWidget from './Widgets/LocationWidget'
import TimerWidget from './Widgets/TimerWidget'
import VelocityWidget from './Widgets/VelocityWidget'

export default hot(() => {

  const [summary, updateUserBehaviorSummary] = useState(getUserBehaviorSummary());
  useEffect(() => { getUserBehaviorSummary(updateUserBehaviorSummary); }, []);

  return <React.Fragment>
    <ClickCounterWidget clicks={summary.clicks} />
    <TimerWidget seconds={summary.seconds} />
    <LocationWidget location={summary.location} />
    <VelocityWidget velocity={summary.velocity} />
  </React.Fragment>

});