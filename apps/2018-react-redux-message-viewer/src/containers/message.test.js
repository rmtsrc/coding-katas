import React from 'react';
import { shallow } from 'enzyme';

import { Message } from './message';

const props = {
  timestamp: '2016-11-09T05:04:58Z',
  email: 'mbradley0@google.it',
  avatar: 'http://dummyimage.com/100x100.png/5fa2dd/ffffff',
  message: 'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.',
};

it('renders correctly', () => {
  const wrapper = shallow(<Message {...props} />);
  expect(wrapper).toMatchSnapshot();
});

it('handles JavaScript hover', () => {
  const wrapper = shallow(<Message {...props} />);
  wrapper.find('dd').prop('onMouseEnter')();
  expect(wrapper).toMatchSnapshot();
  wrapper.find('dd').prop('onMouseLeave')();
  expect(wrapper).toMatchSnapshot();
});
