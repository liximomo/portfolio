import * as types from '../constants/ActionTypes';
import bot from '../lib/bot';

export function addSpeech(speech) {
  return { type: types.ADD_SPEECH, speech };
};

export function replySpeech(speech) {
  return dispatch => 
    bot(speech).then(speech => 
       dispatch(addSpeech(speech))
      );
};