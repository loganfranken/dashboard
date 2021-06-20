import React, { useEffect, useState } from 'react'
import { hot } from 'react-hot-loader/root'

import getUserBehaviorSummary from '!./getUserBehaviorSummary'

import ClickCounterWidget from './Widgets/ClickCounterWidget'
import LocationWidget from './Widgets/LocationWidget'
import TimerWidget from './Widgets/TimerWidget'
import VelocityWidget from './Widgets/VelocityWidget'

import GoalList from './Widgets/GoalList'
import MessageList from './Widgets/MessageList'

export default hot(() => {

  const [summary, updateUserBehaviorSummary] = useState(getUserBehaviorSummary());
  useEffect(() => { getUserBehaviorSummary(updateUserBehaviorSummary); }, []);

  // Filter down the goals to include the completed ones and one incomplete one
  const filteredGoals = summary.goals.filter(goal => goal.isComplete);
  filteredGoals.unshift(summary.goals.filter(goal => !goal.isComplete)[0]);

  return <div className="dashboard">
    <div className="widget-container">
      {summary.activeMeasures.includes('seconds') && <TimerWidget seconds={summary.seconds} /> }
      {summary.activeMeasures.includes('clicks') && <ClickCounterWidget clicks={summary.clicks} /> }
    </div>
    <GoalList goals={filteredGoals} />
    <MessageList />
    {/*
    <LocationWidget location={summary.location} />
    <VelocityWidget velocity={summary.velocity} />
    */}
  </div>

});