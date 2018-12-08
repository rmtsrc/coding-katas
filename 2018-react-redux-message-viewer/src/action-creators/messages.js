import { getMessages, getMembers } from '../data';
import { MESSAGES_LOADING, MESSAGES_LOADED, MESSAGES_FAILED_TO_LOAD } from './action-types';

export const loadMessages = () => async dispatch => {
  dispatch({ type: MESSAGES_LOADING });

  return Promise.all([getMessages(), getMembers()])
    .then(([messages, members]) =>
      dispatch({
        type: MESSAGES_LOADED,
        payload: { messages, members },
      })
    )
    .catch(error =>
      dispatch({
        type: MESSAGES_FAILED_TO_LOAD,
        payload: error,
      })
    );
};
