import React from 'react';
import BpkCard from 'bpk-component-card';
import BpkButton from 'bpk-component-button';
import {
  BpkGridContainer,
  BpkGridRow,
  BpkGridColumn,
} from 'bpk-component-grid';

import STYLES from './index.scss';
import Legs from './Legs';

const Itinerary = ({ item }) => (
  <BpkGridContainer fullWidth>
    <BpkGridRow>
      <BpkGridColumn width={8}>
        <span className={STYLES.price}>{item.price}</span>
        <br />
        <span className={STYLES.agent}>{item.agent}</span>
      </BpkGridColumn>
      <BpkGridColumn width={1}>
        <BpkButton>Select</BpkButton>
      </BpkGridColumn>
    </BpkGridRow>
  </BpkGridContainer>
);

const Itineraries = ({ flights }) =>
  flights.itineraries.map(itinerary => (
    <section key={itinerary.id} className={STYLES.item}>
      <BpkCard className={STYLES.card}>
        <Legs
          className="Legs"
          data={flights.legs.filter(leg => itinerary.legs.includes(leg.id))}
        />
        <Itinerary item={itinerary} />
      </BpkCard>
    </section>
  ));

export default Itineraries;
