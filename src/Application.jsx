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

  const secondsGoal = summary.goals.find(goal => goal.measure === 'seconds');
  const clicksGoal = summary.goals.find(goal => goal.measure === 'clicks');
  const mouseHoldLengthGoal = summary.goals.find(goal => goal.measure === 'mouseHoldLength');
  const keyPressGoal = summary.goals.find(goal => goal.measure === 'keyPresses');
  const mouseDistanceGoal = summary.goals.find(goal => goal.measure === 'mouseDistance');
  const uniqueKeyPressGoal = summary.goals.find(goal => goal.measure === 'uniqueKeyPresses');

  return <div className="dashboard">
    <div className="widget-container">
      {summary.activeMeasures.includes('seconds') && <Timer seconds={summary.seconds} isComplete={secondsGoal.isComplete} /> }
      {summary.activeMeasures.includes('clicks') && <ClickCounter clicks={summary.clicks} target={clicksGoal.target} isComplete={clicksGoal.isComplete} /> }
      {summary.activeMeasures.includes('mouseHoldLength') && <MouseHoldLengthMeasurer mouseHoldLength={summary.mouseHoldLength} target={mouseHoldLengthGoal.target} isComplete={mouseHoldLengthGoal.isComplete} /> }
      {summary.activeMeasures.includes('keyPresses') && <KeyPressCounter keyPresses={summary.keyPresses} target={keyPressGoal.target} isComplete={keyPressGoal.isComplete} /> }
      {summary.activeMeasures.includes('mouseDistance') && <MouseDistanceMeasurer mouseDistance={summary.mouseDistance} target={mouseDistanceGoal.target} isComplete={mouseDistanceGoal.isComplete} /> }
      {summary.activeMeasures.includes('uniqueKeyPresses') && <UniqueKeyPressCounter uniqueKeyPresses={summary.uniqueKeyPresses} target={uniqueKeyPressGoal.target} isComplete={uniqueKeyPressGoal.isComplete} /> }
      {summary.activeMeasures.includes('mouseVelocity') && <MouseVelocityMeasurer mouseVelocity={summary.mouseVelocity} /> }
      {summary.activeMeasures.includes('windowResizePercentage') && <WindowResizeMeasurer windowResizePercentage={summary.windowResizePercentage} /> }
      {summary.activeMeasures.includes('clickButtonRatio') && <ClickButtonRatioMeasurer clickButtonRatio={summary.clickButtonRatio} /> }
      {summary.activeMeasures.includes('windowCloses') && <WindowCloseMeasurer windowCloses={summary.windowCloses} /> }
    </div>
  </div>

});