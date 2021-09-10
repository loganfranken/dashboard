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
      {summary.activeMeasures.includes('seconds') && <Timer seconds={summary.seconds} /> }
      {summary.activeMeasures.includes('clicks') && <ClickCounter clicks={summary.clicks} target={clicksGoal.target} /> }
      {summary.activeMeasures.includes('mouseHoldLength') && <MouseHoldLengthMeasurer mouseHoldLength={summary.mouseHoldLength} target={mouseHoldLengthGoal.target} /> }
      {summary.activeMeasures.includes('keyPresses') && <KeyPressCounter keyPresses={summary.keyPresses} target={keyPressGoal.target} /> }
      {summary.activeMeasures.includes('mouseDistance') && <MouseDistanceMeasurer mouseDistance={summary.mouseDistance} target={mouseDistanceGoal.target} /> }
      {summary.activeMeasures.includes('uniqueKeyPresses') && <UniqueKeyPressCounter uniqueKeyPresses={summary.uniqueKeyPresses} target={uniqueKeyPressGoal.target} /> }
      {summary.activeMeasures.includes('mouseVelocity') && <MouseVelocityMeasurer mouseVelocity={summary.mouseVelocity} target={mouseVelocityGoal.target} /> }
      {summary.activeMeasures.includes('windowResizePercentage') && <WindowResizeMeasurer windowResizePercentage={summary.windowResizePercentage} target={windowResizePercentageGoal.target} /> }
      {summary.activeMeasures.includes('clickButtonRatio') && <ClickButtonRatioMeasurer clickButtonRatio={summary.clickButtonRatio} target={clickButtonRatioGoal.target} /> }
      {summary.activeMeasures.includes('windowCloses') && <WindowCloseMeasurer windowCloses={summary.windowCloses} target={windowClosesGoal.target} /> }
    </div>
  </div>

});