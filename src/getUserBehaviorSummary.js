export default (callback) => {

    /*
    // Initial state
    let state = {
        seconds: 0,
        clicks: 0,
        velocity: 0,
        location: { latitude: null, longitude: null }
    };

    // Set up calls to return state
    const update = () => { callback({ ...state }); };
    if(!callback) { return { ...state }; }
    
    // Measure: Number of times user has clicked
    addEventListener('click', () => { state.clicks++; update(); });

    // Measure: Number of seconds user has spent on dashboard
    setInterval(() => { state.seconds++; update(); }, 1000);

    // Measure: Current location
    navigator.geolocation.getCurrentPosition(({ coords }) => { state.location = coords; update(); }, () => {});

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