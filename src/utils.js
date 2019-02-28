export const gameStates = {
    initial: 'initial',
    playing: 'playing',
    losing: 'losing',
    winning: 'winning'
};

export const sound = {
    success: new Audio(`${process.env.PUBLIC_URL}/Audio/success.mp3`),
    failure: new Audio(`${process.env.PUBLIC_URL}/Audio/failure.mp3`),
    select: new Audio(`${process.env.PUBLIC_URL}/Audio/click1.ogg`),
    click: new Audio(`${process.env.PUBLIC_URL}/Audio/click5.ogg`),
};