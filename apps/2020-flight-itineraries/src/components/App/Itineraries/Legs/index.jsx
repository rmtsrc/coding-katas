import React from 'react';
import {
  BpkGridContainer,
  BpkGridRow,
  BpkGridColumn,
} from 'bpk-component-grid';

import STYLES from './index.scss';

const formatTime = date => {
  const d = new Date(date);
  const dtf = new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour12: false,
    hour: 'numeric',
    minute: 'numeric',
  });
  const [, , , , , , { value: hour }, , { value: minute }] = dtf.formatToParts(
    d,
  );

  return `${hour}:${minute}`;
};

const formatMinsToHours = m =>
  `${(m / 60) ^ 0}`.slice(-2) + 'h ' + ('0' + (m % 60)).slice(-2);

const Leg = ({ item }) => (
  <BpkGridContainer fullWidth>
    <BpkGridRow>
      <BpkGridColumn width={1}>
        <img
          src={`/img/airlines/${item.airline_id}.png`}
          width="25"
          title={item.airline_name}
          className={STYLES.airlineImage}
        />
      </BpkGridColumn>
      <BpkGridColumn width={2}>
        {formatTime(item.departure_time)}
        <br />
        <span className={STYLES.airport}>{item.departure_airport}</span>
      </BpkGridColumn>
      <BpkGridColumn width={1.5}>
        <img src="/img/arrow.png"></img>
      </BpkGridColumn>
      <BpkGridColumn width={3}>
        {formatTime(item.arrival_time)}
        <br />
        <span className={STYLES.airport}>{item.arrival_airport}</span>
      </BpkGridColumn>
      <BpkGridColumn width={4} className={STYLES.duration}>
        <small>
          {formatMinsToHours(item.duration_mins)}
          <br />
          {item.stops ? (
            <span className={STYLES.notDirect}>{item.stops} stop</span>
          ) : (
            <span className={STYLES.direct}>Direct</span>
          )}
        </small>
      </BpkGridColumn>
    </BpkGridRow>
  </BpkGridContainer>
);

const Legs = ({ data }) => data.map(leg => <Leg key={leg.id} item={leg} />);

export default Legs;
