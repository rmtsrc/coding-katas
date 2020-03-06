import React, { useEffect, useState } from 'react';
import BpkText from 'bpk-component-text';

import Header from '../Header';

import STYLES from './App.scss';
import Itineraries from './Itineraries';

const getClassName = className => STYLES[className] || 'UNKNOWN';

const App = () => {
  const [flights, setFlights] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('flights.json');
      if (!response.ok) {
        throw new Error('There was a problem loading flights');
      }
      setFlights(await response.json());
    }
    fetchData();
  }, []);

  return (
    <div className={getClassName('App')}>
      <Header />
      <main className={getClassName('App__main')}>
        {flights ? (
          <Itineraries flights={flights} />
        ) : (
          <BpkText tagName="p">Looking for flights...</BpkText>
        )}
      </main>
    </div>
  );
};

export default App;
