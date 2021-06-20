export default (callback) => {

    const goals = [
        { measure: 'seconds', target: 10, description: '10 seconds on dashboard' },
        { measure: 'clicks', target: 20, description: '20 clicks' }
    ];

    // Initial state
    let state = {
        goals,
        activeMeasures: ['seconds'],

        seconds: 0,
        clicks: 0

        /*
        clicks: 0,
        velocity: 0,
        location: { latitude: null, longitude: null }
        */
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

    // Measure: Number of times user has clicked
    addEventListener('click', () => { state.clicks++; update(); });

    /*
    // Measure: Mouse Velocity
    let lastX = null;
    let lastY = null;
    let lastTime = null;
    addEventListener('mousemove', (evt) => {
        
        const x = evt.x;
        const y = evt.y;
        const time = Date.now();

        if(lastX !== null && lastY !== null && lastTime !== null)
        {
            state.velocity = Math.sqrt(Math.pow(Math.abs(lastX - x), 2), Math.pow(Math.abs(lastY - y), 2)) / (time - lastTime);
            update();
        }
        
        lastX = x;
        lastY = y;
        lastTime = time;
    });
    */

}