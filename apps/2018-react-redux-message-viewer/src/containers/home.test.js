import React from 'react';
import { shallow } from 'enzyme';

import Home from './home';

it('renders correctly with no data', () => {
  const props = {
    messages: [],
    members: {},
    loadMessages: jest.fn(),
  };
  const wrapper = shallow(<Home.WrappedComponent {...props} />);
  expect(wrapper).toMatchSnapshot();
  expect(props.loadMessages).toHaveBeenCalledTimes(1);
  expect(props.loadMessages).toHaveBeenCalledWith();
});

it('renders correctly with data', () => {
  const props = {
    messages: [
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
    ],
    members: {
      '16373df5-da0a-4074-8295-f916b94269f4': {
        id: '16373df5-da0a-4074-8295-f916b94269f4',
        firstName: 'Martin',
        lastName: 'Bradley',
        email: 'mbradley0@google.it',
        avatar: 'http://dummyimage.com/100x100.png/5fa2dd/ffffff',
        ip: '166.124.172.160',
      },
      'fe27b760-a915-475c-80bb-7cdf14cc6ef3': {
        id: 'fe27b760-a915-475c-80bb-7cdf14cc6ef3',
        firstName: 'Helen',
        lastName: 'Hawkins',
        email: 'hhawkins1@posterous.com',
        avatar: 'http://dummyimage.com/100x100.jpg/dddddd/000000',
        ip: '179.239.189.173',
      },
    },
    loadMessages: () => {},
  };
  const wrapper = shallow(<Home.WrappedComponent {...props} />);
  expect(wrapper).toMatchSnapshot();
});
