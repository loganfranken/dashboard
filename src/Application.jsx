import React, { useEffect, useState } from 'react'
import { hot } from 'react-hot-loader/root'

import getUserBehaviorSummary from '!./getUserBehaviorSummary'

import ClickCounter from './Widgets/ClickCounter'
import KeyPressCounter from './Widgets/KeyPressCounter'
import MouseDistanceMeasurer from './Widgets/MouseDistanceMeasurer'
import Timer from './Widgets/Timer'

import GoalList from './GoalList'
import MessageList from './MessageList'

export default hot(() => {

  const [summary, updateUserBehaviorSummary] = useState(getUserBehaviorSummary());
  useEffect(() => { getUserBehaviorSummary(updateUserBehaviorSummary); }, []);

  // Filter down the goals to include the completed ones and one incomplete one
  const filteredGoals = summary.goals.filter(goal => goal.isComplete);
  filteredGoals.unshift(summary.goals.filter(goal => !goal.isComplete)[0]);

  return <div className="dashboard">
    <div className="widget-container">
      {summary.activeMeasures.includes('seconds') && <Timer seconds={summary.seconds} /> }
      {summary.activeMeasures.includes('clicks') && <ClickCounter clicks={summary.clicks} /> }
      {summary.activeMeasures.includes('keyPresses') && <KeyPressCounter keyPresses={summary.keyPresses} /> }
      {summary.activeMeasures.includes('mouseDistance') && <MouseDistanceMeasurer mouseDistance={summary.mouseDistance} /> }
    </div>
    <GoalList goals={filteredGoals} />
    <MessageList />
  </div>

});