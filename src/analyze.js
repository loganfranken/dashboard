let onUpdate = () => {};

const update = () => {
    onUpdate({
        seconds,
        clicks
    });
};

let clicks = 0;
addEventListener('click', () => { clicks++; update(); });

let seconds = 0;
setInterval(() => { seconds++; update(); }, 1000);

export default (callback) => {
    onUpdate = callback;
}