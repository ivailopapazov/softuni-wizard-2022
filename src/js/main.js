const startScreen = document.querySelector('.start-screen');
const gameScreen = document.querySelector('.game-screen');

startScreen.addEventListener('click', (e) => {
    console.log('start game');
    e.currentTarget.classList.add('hidden');
    gameScreen.classList.remove('hidden');
});