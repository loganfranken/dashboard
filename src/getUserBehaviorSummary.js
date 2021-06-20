export default (callback) => {

    const goals = [
        { measure: 'seconds', target: 10, description: '10 seconds on dashboard' },
        { measure: 'windowCloses', target: 1, description: '1 window closes' },
        { measure: 'windowResizePercentage', target:30, description: 'Change window size by 30 percent' },
        { measure: 'topMouseHoldLength', target: 10, description: 'Mouse held down 10 seconds' },
        { measure: 'uniqueKeyPresses', target: 10, description: '10 unique key presses' },
        { measure: 'clickButtonRatio', target: 0.5, description: '0.5 click button ratio' },
        { measure: 'clicks', target: 20, description: '20 clicks' },
        { measure: 'keyPresses', target: 10, description: '10 keys pressed' },
        { measure: 'mouseDistance', target: 1000, description: 'Mouse moved 1000 pixels' },
        { measure: 'topMouseVelocity', target: 10, description: 'Top mouse velocity of 10 p/s' }
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
        topMouseVelocity: 0,
        topMouseHoldLength: 0,

        windowResizePercentage: 0,
        windowCloses: 0

    };

    const assessGoals = () => {

        // We're going to loop through and evaluate the latest
        // incomplete goal, creating a list of currently active
        // measures along the way
        const activeMeasures = [];
        for(let i = 0; i < goals.length; i++)
        {
            const goal = goals[i];

            // Create a list of all currently active measures
            if(!activeMeasures.includes(goal.measure))
            {
                activeMeasures.push(goal.measure);
            }

            if(goal.isComplete)
            {
                continue;
            }

            // We've found the latest incomplete goal, so let's
            // evaluate it
            goal.currentPercentage = ((state[goal.measure] / goal.target) * 100);

            if(goal.currentPercentage >= 100)
            {
                goal.isComplete = true;
            }

            break;
        }

        state.activeMeasures = activeMeasures;

    };

    // Set up calls to return state
    const update = () => { assessGoals(); callback({ ...state }); };
    if(!callback) { return { ...state }; }
    
    // Measure: Number of seconds user has spent on dashboard
    setInterval(() => { state.seconds++; update(); }, 1000);

    let leftClicks = 0;
    let rightClicks = 0;
    let mouseDownTime = null;
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

        if(mouseDownTime !== null)
        {
            const mouseHoldLength = ((Date.now() - mouseDownTime) / 1000);

            if(mouseHoldLength > state.topMouseHoldLength)
            {
                state.topMouseHoldLength = mouseHoldLength;
            }
        }

        update();
    
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
                const mouseVelocity = distance / (time - lastTime);
                if(mouseVelocity > state.topMouseVelocity)
                {
                    state.topMouseVelocity = mouseVelocity;
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