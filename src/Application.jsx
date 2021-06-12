import React, { useEffect, useState } from 'react'
import { hot } from 'react-hot-loader/root'

import ClickCounterWidget from './Widgets/ClickCounterWidget'
import TimerWidget from './Widgets/TimerWidget'

export default hot(() => {

  // Capture Time Elapsed
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
      const interval = setInterval(() => { setSeconds(seconds + 1); }, 1000);
      return () => clearInterval(interval);
  }, [seconds]);

  // Capture User Clicks
  const [clicks, setClicks] = useState(0)

  useEffect(() => {
    const handler = () => { setClicks(clicks + 1) };
    window.addEventListener('click', handler);
    return () => window.removeEventListener('click', handler);
  }, [clicks]);

  return <React.Fragment>
      <ClickCounterWidget clicks={clicks} />
      <TimerWidget seconds={seconds} />
    </React.Fragment>

});