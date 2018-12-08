import { MESSAGES_LOADED, MESSAGES_LOADING, MESSAGES_FAILED_TO_LOAD } from '../action-creators/action-types';

const indexMembers = members =>
  members.reduce((accumulator, currentValue) => ({ ...accumulator, [currentValue.id]: currentValue }), {});

const initialState = {
  messages: [],
  members: {},
  isLoading: false,
  error: null,
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case MESSAGES_LOADED: {
      const messages = [...payload.messages];
      return {
        ...state,
        messages: messages.sort((a, b) => b.timestamp.localeCompare(a.timestamp)),
        members: indexMembers(payload.members),
        isLoading: false,
        error: null,
      };
    }
    case MESSAGES_LOADING: {
      return { ...state, isLoading: true, error: null };
    }
    case MESSAGES_FAILED_TO_LOAD: {
      return { ...state, ...initialState, error: payload };
    }
    default: {
      return state;
    }
  }
};
