export default (callback) => {

    const goals = [
        { measure: 'seconds', target: 10 },
        { measure: 'clicks', target: 10 },
        { measure: 'mouseHoldLength', target: 1 },
        { measure: 'keyPresses', target: 9 },
        { measure: 'mouseDistance', target: 5000 },
        { measure: 'uniqueKeyPresses', target: 16 },
        { measure: 'mouseVelocity', target: 10 },
        { measure: 'windowResizePercentage', target: 30 },
        { measure: 'clickButtonRatio', target: 0.5 },
        { measure: 'windowCloses', target: 1 }
    ];

    // Initial state
    let state = {

        goals,
        activeMeasures: ['mouseDistance'],

        seconds: 0,

        clicks: 0,
        clickButtonRatio: 0,

        keyPresses: 0,
        uniqueKeyPresses: 0,

        mouseDistance: 0,
        mouseVelocity: 0,
        mouseHoldLength: 0,

        windowResizePercentage: 0,
        windowCloses: 0

    };

    const assessGoals = () => {

        goals.forEach((goal, i) => {

            // Are we measuring this goal yet?
            if(!state.activeMeasures.includes(goal.measure))
            {
                return;
            }

            // Has this goal been completed?
            const currentPercentage = ((state[goal.measure] / goal.target) * 100);
            if(currentPercentage < 100)
            {
                return;
            }

            goal.isComplete = true;

            // Is this the last goal?
            if(i >= goals.length)
            {
                return;
            }

            // If we found a completed goal, let's unlock the next measure
            const nextGoal = goals[i + 1];
            if(!state.activeMeasures.includes(nextGoal.measure))
            {
                state.activeMeasures.push(nextGoal.measure);
            }

        });

    };

    // Set up calls to return state
    const update = () => {
        assessGoals();
        callback({ ...state });
    };

    if(!callback) { return { ...state }; }
    
    // Measure: Number of seconds user has spent on dashboard
    setInterval(() => { state.seconds++; update(); }, 1000);

    // Measure: How long the mouse has been held down
    let mouseDownTime = null;
    let mouseDownInterval = null;

    const updateMouseHoldLength = (value) => {

        if(!state.activeMeasures.includes('mouseHoldLength'))
        {
            return;
        }

        if(typeof value !== 'undefined')
        {
            state.mouseHoldLength = 0;
        }
        else if(mouseDownTime !== null)
        {
            const mouseHoldLength = ((Date.now() - mouseDownTime) / 1000);
            state.mouseHoldLength = mouseHoldLength;
        }

        update();

    };

    let leftClicks = 0;
    let rightClicks = 0;
    oncontextmenu = (evt) => { evt.preventDefault(); };

    addEventListener('mousedown', (evt) => {

        mouseDownTime = Date.now();

        switch(evt.button)
        {
            case 0:
                leftClicks++;
                break;

            case 2:
                rightClicks++;
                break;
        }

        mouseDownInterval = setInterval(updateMouseHoldLength, 100);

        // Measure: Click button ratio
        state.clickButtonRatio =    (leftClicks === 0 && rightClicks === 0)
                                        ? 0
                                        : (leftClicks > rightClicks)
                                            ? (rightClicks/leftClicks)
                                            : (leftClicks/rightClicks);
        
        // Measure: Number of times user has clicked
        if(state.activeMeasures.includes('clicks'))
        {
            state.clicks++;
        }

        update();

    });

    addEventListener('mouseup', () => {
        updateMouseHoldLength(0);
        clearInterval(mouseDownInterval);
        mouseDownInterval = null;
    });

    // Measure: Number of key presses
    let keysPressed = [];
    addEventListener('keyup', (evt) => {

        if(state.activeMeasures.includes('uniqueKeyPresses'))
        {
            if(!keysPressed.includes(evt.code))
            {
                keysPressed.push(evt.code);
            }
    
            state.uniqueKeyPresses = keysPressed.length;
        }

        if(state.activeMeasures.includes('keyPresses'))
        {
            state.keyPresses++;
        }
        
        update();
    });

    let lastX = null;
    let lastY = null;
    let lastTime = null;
    addEventListener('mousemove', (evt) => {
        
        const x = evt.x;
        const y = evt.y;
        const time = Date.now();

        if(lastX !== null && lastY !== null)
        {
            // Measure: Mouse Distance
            const distance = Math.sqrt(Math.pow(Math.abs(lastX - x), 2), Math.pow(Math.abs(lastY - y), 2));
            if(state.activeMeasures.includes('mouseDistance'))
            {
                state.mouseDistance += distance;
            }
            
            if(lastTime !== null)
            {
                if(state.activeMeasures.includes('mouseVelocity'))
                {
                    // Measure: Mouse Velocity
                    state.mouseVelocity = distance / (time - lastTime);
                }
            }

            update();
        }
        
        lastX = x;
        lastY = y;
        lastTime = time;
    });

    // Measure: Percentage of window resized
    const startingWindowSize = window.innerWidth * window.innerHeight;
    addEventListener('resize', () => {

        const currentWindowSize = (window.innerWidth * window.innerHeight);
        state.windowResizePercentage = (100 - ((currentWindowSize > startingWindowSize) ? (startingWindowSize/currentWindowSize) : (currentWindowSize/startingWindowSize)) * 100);
        update();

    });

    // Measure: Window closes
    addEventListener('beforeunload', () => { state.windowCloses++; update(); });

}