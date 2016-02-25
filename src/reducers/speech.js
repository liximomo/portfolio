import { ADD_SPEECH } from '../constants/ActionTypes'

export default function speeches(state = [], action) {
  switch (action.type) {
    case ADD_SPEECH:
      return [
        ...state,
        action.speech
      ];

    default:
      return state;
  }
}
