function start(state, game) {
    game.createWizard(state.wizard);

    window.requestAnimationFrame(gameLoop.bind(null, state, game))
}

function gameLoop(state, game) {

    window.requestAnimationFrame(gameLoop.bind(null, state, game));
}