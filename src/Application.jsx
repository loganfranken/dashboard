import React, { useEffect, useState } from 'react'
import { hot } from 'react-hot-loader/root'

import getUserBehaviorSummary from '!./getUserBehaviorSummary'

import ClickCounterWidget from './Widgets/ClickCounterWidget'
import LocationWidget from './Widgets/LocationWidget'
import TimerWidget from './Widgets/TimerWidget'
import VelocityWidget from './Widgets/VelocityWidget'

import GoalList from './Widgets/GoalList'
import Widget from './Widgets/Widget'

export default hot(() => {

  const [summary, updateUserBehaviorSummary] = useState(getUserBehaviorSummary());
  useEffect(() => { getUserBehaviorSummary(updateUserBehaviorSummary); }, []);

  return <div className="dashboard">
    <div className="widget-container">
     <Widget />
    </div>
    <div className="sidebar">
      <GoalList />
    </div>
    {/*
    <ClickCounterWidget clicks={summary.clicks} />
    <TimerWidget seconds={summary.seconds} />
    <LocationWidget location={summary.location} />
    <VelocityWidget velocity={summary.velocity} />
    */}
  </div>

});