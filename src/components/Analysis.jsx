import React from 'react';
import Wins from './Wins';
import Losses from './Losses';

const Analysis = () => {
  return (
    <div>
      <section id="wins">
        <Wins />
      </section>
      <section id="losses">
        <Losses />
      </section>
    </div>
  );
};

export default Analysis;
