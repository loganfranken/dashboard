export default (callback) => {

    const goals = [
        { measure: 'seconds', target: 10 },
        { measure: 'clicks', target: 10 },
        { measure: 'mouseHoldLength', target: 1 },
        { measure: 'keyPresses', target: 9 },
        { measure: 'mouseDistance', target: 5000 },
        { measure: 'uniqueKeyPresses', target: 27 },
        { measure: 'mouseVelocity', target: 10 },
        { measure: 'windowResizePercentage', target: 30 },
        { measure: 'clickButtonRatio', target: 0.3 },
        { measure: 'windowCloses', target: 1 }
    ];

    // Initial state
    let state = {

        goals,
        activeMeasures: ['seconds'],

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

        // We're going to loop through the goals until we reach
        // the first incomplete goal of a measure different than
        // all of the existing completed goals, evaluating all
        // incomplete goals along the way

        const activeMeasures = [];
        const completedMeasures = [];

        for(let i = 0; i < goals.length; i++)
        {
            const goal = goals[i];
            goal.isActive = true;

            // Create a list of all currently active measures
            if(!activeMeasures.includes(goal.measure))
            {
                activeMeasures.push(goal.measure);
            }

            if(goal.isComplete)
            {
                if(!completedMeasures.includes(goal.measure))
                {
                    completedMeasures.push(goal.measure);
                }

                continue;
            }

            // We've found an incomplete goal, so let's evaluate it
            goal.currentPercentage = ((state[goal.measure] / goal.target) * 100);

            if(goal.currentPercentage >= 100)
            {
                goal.isComplete = true;
                continue;
            }

            if(i < goals.length - 1)
            {
                // If the next goal is of a measure we've already completed,
                // let's go ahead and loop forward to grab it
                const nextGoal = goals[i + 1];
                if(completedMeasures.includes(nextGoal.measure))
                {
                    continue;
                }
            }

            // Otherwise, let's wait until the user completes the current
            // measure before unlocking the next goal
            break;
        }

        state.activeMeasures = activeMeasures;

    };

    // Set up calls to return state
    const update = () => { assessGoals(); callback({ ...state }); };
    if(!callback) { return { ...state }; }
    
    // Measure: Number of seconds user has spent on dashboard
    setInterval(() => { state.seconds++; update(); }, 1000);

    // Measure: How long the mouse has been held down
    let mouseDownTime = null;
    let mouseDownInterval = null;

    const updateMouseHoldLength = (value) => {

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
        state.clicks++;

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

        if(!keysPressed.includes(evt.code))
        {
            keysPressed.push(evt.code);
        }

        state.keyPresses++;
        state.uniqueKeyPresses = keysPressed.length;
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
            state.mouseDistance += distance;

            if(lastTime !== null)
            {
                // Measure: Mouse Velocity
                state.mouseVelocity = distance / (time - lastTime);
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