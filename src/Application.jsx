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
  const mouseVelocityGoal = summary.goals.find(goal => goal.measure === 'mouseVelocity');
  const windowResizePercentageGoal = summary.goals.find(goal => goal.measure === 'windowResizePercentage');
  const clickButtonRatioGoal = summary.goals.find(goal => goal.measure === 'clickButtonRatio');
  const windowClosesGoal = summary.goals.find(goal => goal.measure === 'windowCloses');

  return <div className="dashboard">
    <div className="widget-container">
      {summary.activeMeasures.includes('seconds') && <Timer seconds={summary.seconds} target={secondsGoal.target} isComplete={secondsGoal.isComplete} /> }
      {summary.activeMeasures.includes('clicks') && <ClickCounter clicks={summary.clicks} target={clicksGoal.target} isComplete={clicksGoal.isComplete} /> }
      {summary.activeMeasures.includes('mouseHoldLength') && <MouseHoldLengthMeasurer mouseHoldLength={summary.mouseHoldLength} target={mouseHoldLengthGoal.target} isComplete={mouseHoldLengthGoal.isComplete} /> }
      {summary.activeMeasures.includes('keyPresses') && <KeyPressCounter keyPresses={summary.keyPresses} target={keyPressGoal.target} isComplete={keyPressGoal.isComplete} /> }
      {summary.activeMeasures.includes('mouseDistance') && <MouseDistanceMeasurer mouseDistance={summary.mouseDistance} target={mouseDistanceGoal.target} isComplete={mouseDistanceGoal.isComplete} /> }
      {summary.activeMeasures.includes('uniqueKeyPresses') && <UniqueKeyPressCounter uniqueKeyPresses={summary.uniqueKeyPresses} target={uniqueKeyPressGoal.target} isComplete={uniqueKeyPressGoal.isComplete} /> }
      {summary.activeMeasures.includes('mouseVelocity') && <MouseVelocityMeasurer mouseVelocity={summary.mouseVelocity} target={mouseVelocityGoal.target} isComplete={mouseVelocityGoal.isComplete} /> }
      {summary.activeMeasures.includes('windowResizePercentage') && <WindowResizeMeasurer windowResizePercentage={summary.windowResizePercentage} target={windowResizePercentageGoal.target} isComplete={windowResizePercentageGoal.isComplete} /> }
      {summary.activeMeasures.includes('clickButtonRatio') && <ClickButtonRatioMeasurer clickButtonRatio={summary.clickButtonRatio} target={clickButtonRatioGoal.target} isComplete={clickButtonRatioGoal.isComplete} /> }
      {summary.activeMeasures.includes('windowCloses') && <WindowCloseMeasurer windowCloses={summary.windowCloses} target={windowClosesGoal.target} isComplete={windowClosesGoal.isComplete} /> }
    </div>
  </div>

});