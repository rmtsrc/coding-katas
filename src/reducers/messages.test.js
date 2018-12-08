import deepFreeze from 'deep-freeze';

import messagesReducer from './messages';
import { MESSAGES_LOADED, MESSAGES_LOADING, MESSAGES_FAILED_TO_LOAD } from '../action-creators/action-types';

describe('messages reducer', () => {
  it('sets sorted messages on messages loaded', () => {
    const messagesPayload = deepFreeze([
      {
        id: 'b03569ae-ccbf-4975-8040-4daba638b407',
        userId: '16373df5-da0a-4074-8295-f916b94269f4',
        message: 'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.',
        timestamp: '2016-11-09T05:04:58Z',
      },
      {
        id: 'cd445e6d-e514-424f-ba8f-16ec842002c6',
        userId: 'fe27b760-a915-475c-80bb-7cdf14cc6ef3',
        message: 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
        timestamp: '2017-02-09T04:27:38Z',
      },
    ]);

    const messagesActual = messagesReducer([], {
      type: MESSAGES_LOADED,
      payload: { messages: messagesPayload, members: [] },
    });

    expect(messagesActual).toEqual({
      messages: [messagesPayload[1], messagesPayload[0]],
      members: {},
      isLoading: false,
      error: null,
    });
  });

  it('sets indexed on members loaded', () => {
    const membersPayload = [
      {
        id: 'e837c9f5-247f-445f-bcc3-7d434348336b',
        firstName: 'Martin',
        lastName: 'Bradley',
        email: 'mbradley0@google.it',
        avatar: 'http://dummyimage.com/100x100.png/5fa2dd/ffffff',
        ip: '166.124.172.160',
      },
      {
        id: 'cae5d3af-9ac7-471e-9061-e2e9d75f00e4',
        firstName: 'Helen',
        lastName: 'Hawkins',
        email: 'hhawkins1@posterous.com',
        avatar: 'http://dummyimage.com/100x100.jpg/dddddd/000000',
        ip: '179.239.189.173',
      },
    ];

    const messagesActual = messagesReducer([], {
      type: MESSAGES_LOADED,
      payload: { messages: [], members: membersPayload },
    });

    expect(messagesActual).toEqual({
      messages: [],
      members: { [membersPayload[0].id]: membersPayload[0], [membersPayload[1].id]: membersPayload[1] },
      isLoading: false,
      error: null,
    });
  });

  it('sets the isLoading state to true when loading', () => {
    expect(
      messagesReducer(
        { existing: 'state' },
        {
          type: MESSAGES_LOADING,
        }
      )
    ).toEqual({
      existing: 'state',
      isLoading: true,
      error: null,
    });
  });

  it('returns the correct state when the messages fail to load', () => {
    expect(
      messagesReducer(
        { existing: 'state', isLoading: true },
        {
          type: MESSAGES_FAILED_TO_LOAD,
          payload: { an: 'error' },
        }
      )
    ).toEqual({
      existing: 'state',
      messages: [],
      members: {},
      isLoading: false,
      error: { an: 'error' },
    });
  });

  it('returns the current state when the action type is unknown', () => {
    expect(
      messagesReducer(
        { existing: 'state' },
        {
          type: 'UNKNOWN_TYPE',
        }
      )
    ).toEqual({
      existing: 'state',
    });
  });
});
