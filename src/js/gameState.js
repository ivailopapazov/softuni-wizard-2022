function initState() {
    const state = {
        player: 'Pesho',
        wizard: {
            width: 82,
            height: 100,
            startX: Math.floor(Math.random() * 1000),
            startY: Math.floor(Math.random() * 500),
        }
    }

    return state;
}