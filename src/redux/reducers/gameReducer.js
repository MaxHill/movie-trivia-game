import { gameStates } from '../../utils';

const createRound = ({ movies, question }) => ({
  selected: '',
  question,
  movies
});

const initialState = {
  score: 0,
  round: 0,
  state: gameStates.initial
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'START_NEW_ROUND':
      return {
        ...state,
        round: state.round + 1,
        state: gameStates.playing,
        roundData: createRound(action.payload)
      }
    case 'SET_SELECTED':
      return {
        ...state,
        roundData: {
          ...state.roundData,
          selected: action.id
        }
      }
    case 'MAKE_GUESS':
      return {
        ...state,
        guess: action.id
      }
    case 'INCREMENT_SCORE':
      return {
        ...state,
        score: state.score + 1
      }
    case 'SET_STATE':
      return {
        ...state,
        state: gameStates[action.state]
      }
    default:
      return state
  }
}
