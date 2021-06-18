export default (callback) => {

    // Initial state
    let state = {
        seconds: 0,
        clicks: 0,
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

}