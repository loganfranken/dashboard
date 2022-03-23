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

  const currentMeasure = summary.activeMeasures[summary.activeMeasures.length - 1];

  return <div className="dashboard">
    <div className="widget-container">
      {currentMeasure === 'seconds' && <Timer seconds={summary.seconds} target={secondsGoal.target} isComplete={secondsGoal.isComplete} />}
      {currentMeasure === 'clicks' && <ClickCounter clicks={summary.clicks} target={clicksGoal.target} isComplete={clicksGoal.isComplete} />}
      {currentMeasure === 'mouseHoldLength' && <MouseHoldLengthMeasurer mouseHoldLength={summary.mouseHoldLength} target={mouseHoldLengthGoal.target} isComplete={mouseHoldLengthGoal.isComplete} />}
      {currentMeasure === 'keyPresses' && <KeyPressCounter keyPresses={summary.keyPresses} target={keyPressGoal.target} isComplete={keyPressGoal.isComplete} />}
      {currentMeasure === 'mouseDistance' && <MouseDistanceMeasurer mouseDistance={summary.mouseDistance} target={mouseDistanceGoal.target} isComplete={mouseDistanceGoal.isComplete} />}
      {currentMeasure === 'uniqueKeyPresses' && <UniqueKeyPressCounter uniqueKeyPresses={summary.uniqueKeyPresses} target={uniqueKeyPressGoal.target} isComplete={uniqueKeyPressGoal.isComplete} />}
      {currentMeasure === 'mouseVelocity' && <MouseVelocityMeasurer mouseVelocity={summary.mouseVelocity} target={mouseVelocityGoal.target} isComplete={mouseVelocityGoal.isComplete} />}
      {currentMeasure === 'windowResizePercentage' && <WindowResizeMeasurer windowResizePercentage={summary.windowResizePercentage} target={windowResizePercentageGoal.target} isComplete={windowResizePercentageGoal.isComplete} />}
      {currentMeasure === 'clickButtonRatio' && <ClickButtonRatioMeasurer clickButtonRatio={summary.clickButtonRatio} target={clickButtonRatioGoal.target} isComplete={clickButtonRatioGoal.isComplete} />}
      {currentMeasure === 'windowCloses' && <WindowCloseMeasurer windowCloses={summary.windowCloses} target={windowClosesGoal.target} isComplete={windowClosesGoal.isComplete} />}
    </div>
  </div>

});