import React, { useEffect, useState } from 'react'
import { hot } from 'react-hot-loader/root'

import getUserBehaviorSummary from '!./getUserBehaviorSummary'

import ClickCounter from './Widgets/ClickCounter'
import ClickButtonRatioMeasurer from './Widgets/ClickButtonRatioMeasurer'
import KeyPressCounter from './Widgets/KeyPressCounter'
import MouseDistanceMeasurer from './Widgets/MouseDistanceMeasurer'
import MouseHoldLengthMeasurer from './Widgets/MouseHoldLengthMeasurer'
import MouseVelocityMeasurer from './Widgets/MouseVelocityMeasurer'
import Timer from './Widgets/Timer'
import UniqueKeyPressCounter from './Widgets/UniqueKeyPressCounter'
import WindowCloseMeasurer from './Widgets/WindowCloseMeasurer'
import WindowResizeMeasurer from './Widgets/WindowResizeMeasurer'

import GoalList from './GoalList'

export default hot(() => {

  const [summary, updateUserBehaviorSummary] = useState(getUserBehaviorSummary());
  useEffect(() => { getUserBehaviorSummary(updateUserBehaviorSummary); }, []);

  // Filter down the goals to include the completed ones and one incomplete one
  const filteredGoals = summary.goals.filter(goal => goal.isActive);

  return <div className="dashboard">
    <div className="widget-container">
      {summary.activeMeasures.includes('seconds') && <Timer seconds={summary.seconds} /> }
      {summary.activeMeasures.includes('clicks') && <ClickCounter clicks={summary.clicks} /> }
      {summary.activeMeasures.includes('keyPresses') && <KeyPressCounter keyPresses={summary.keyPresses} /> }
      {summary.activeMeasures.includes('mouseDistance') && <MouseDistanceMeasurer mouseDistance={summary.mouseDistance} /> }
      {summary.activeMeasures.includes('topMouseVelocity') && <MouseVelocityMeasurer topMouseVelocity={summary.topMouseVelocity} /> }
      {summary.activeMeasures.includes('clickButtonRatio') && <ClickButtonRatioMeasurer clickButtonRatio={summary.clickButtonRatio} /> }
      {summary.activeMeasures.includes('uniqueKeyPresses') && <UniqueKeyPressCounter uniqueKeyPresses={summary.uniqueKeyPresses} /> }
      {summary.activeMeasures.includes('mouseHoldLength') && <MouseHoldLengthMeasurer mouseHoldLength={summary.mouseHoldLength} /> }
      {summary.activeMeasures.includes('windowResizePercentage') && <WindowResizeMeasurer windowResizePercentage={summary.windowResizePercentage} /> }
      {summary.activeMeasures.includes('windowCloses') && <WindowCloseMeasurer windowCloses={summary.windowCloses} /> }
    </div>
    <GoalList goals={filteredGoals} />
  </div>

});