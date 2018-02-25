window.addEventListener('keydown', (e) => {
    const { keyCode } = e;
    const audio = document.querySelector(`audio[data-key="${keyCode}"`);
    const key = document.querySelector(`.key[data-key="${keyCode}"`);
    if (audio) {
        audio.currentTime = 0;
        audio.play();
        key.classList.add('playing');
    }
})

const keys = document.querySelectorAll(`.key`);
keys.forEach((key) => {
    key.addEventListener('transitionend', (e) => {
        if (e.propertyName === 'transform') {
            e.target.classList.remove('playing');
        }
    })
})
