import React from 'react';
import { render } from '@testing-library/react';

import Legs from '.';

describe('Legs', () => {
  const mockLegs = [
    {
      id: 'leg_1',
      departure_airport: 'BUD',
      arrival_airport: 'LTN',
      departure_time: '2020-10-31T15:35',
      arrival_time: '2020-10-31T17:00',
      stops: 0,
      airline_name: 'Wizz Air',
      airline_id: 'WZ',
      duration_mins: 145,
    },
    {
      id: 'leg_4',
      departure_airport: 'LTN',
      arrival_airport: 'BUD',
      departure_time: '2020-11-11T19:45',
      arrival_time: '2020-11-11T21:10',
      stops: 0,
      airline_name: 'Wizz Air',
      airline_id: 'WZ',
      duration_mins: 145,
    },
  ];

  it('renders legs correctly', () => {
    const { container } = render(<Legs data={mockLegs} />);
    expect(container).toMatchSnapshot();
  });
});
