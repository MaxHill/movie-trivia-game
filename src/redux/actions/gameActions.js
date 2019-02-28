import database from '../../database';

export const makeGuessAction = () => (dispatch, getState) => {
    const { roundData } = getState().gameReducer;

    if (roundData.selected === roundData.question.director.id) {
        dispatch({ type: 'INCREMENT_SCORE' })
        dispatch({ type: 'SET_STATE', state: 'winning' })
    } else {
        dispatch({ type: 'SET_STATE', state: 'losing' })
    }
}

export const newRoundAction = () => dispatch => {
    const movies = database().movies
        .sort(() => 0.5 - Math.random()) // Shuffle array
        .slice(0, 4); // Take first 4 from array
    const question = movies[Math.floor(Math.random() * movies.length)];

    dispatch({
        type: 'START_NEW_ROUND',
        payload: { movies, question }
    })
}

export const setSelectedAction = (id) =>
    dispatch => dispatch({ type: 'SET_SELECTED', id });
