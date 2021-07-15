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

export default hot(() => {

  const [summary, updateUserBehaviorSummary] = useState(getUserBehaviorSummary());
  useEffect(() => { getUserBehaviorSummary(updateUserBehaviorSummary); }, []);

  const completedGoals = summary.goals.filter(goal => goal.isComplete);
  const isSecondsComplete = completedGoals.some(g => g.measure === 'seconds');

  return <div className="dashboard">
    <div className="widget-container">
      {summary.activeMeasures.includes('seconds') && <Timer seconds={summary.seconds} isComplete={isSecondsComplete} /> }
      {summary.activeMeasures.includes('clicks') && <ClickCounter clicks={summary.clicks} /> }
      {summary.activeMeasures.includes('mouseHoldLength') && <MouseHoldLengthMeasurer mouseHoldLength={summary.mouseHoldLength} /> }
      {summary.activeMeasures.includes('keyPresses') && <KeyPressCounter keyPresses={summary.keyPresses} /> }
      {summary.activeMeasures.includes('mouseDistance') && <MouseDistanceMeasurer mouseDistance={summary.mouseDistance} /> }
      {summary.activeMeasures.includes('uniqueKeyPresses') && <UniqueKeyPressCounter uniqueKeyPresses={summary.uniqueKeyPresses} /> }
      {summary.activeMeasures.includes('mouseVelocity') && <MouseVelocityMeasurer mouseVelocity={summary.mouseVelocity} /> }
      {summary.activeMeasures.includes('windowResizePercentage') && <WindowResizeMeasurer windowResizePercentage={summary.windowResizePercentage} /> }
      {summary.activeMeasures.includes('clickButtonRatio') && <ClickButtonRatioMeasurer clickButtonRatio={summary.clickButtonRatio} /> }
      {summary.activeMeasures.includes('windowCloses') && <WindowCloseMeasurer windowCloses={summary.windowCloses} /> }
    </div>
  </div>

});