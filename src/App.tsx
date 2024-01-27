import React, { useState } from 'react';
import ActivityRings from './ActivityRings/ActivityRings';

export default function App() {
  const [rings, setRings] = useState([
    { value: 2.5 },
    { value: 0 },
    { value: 1 },
  ]);

  return (
    <>
      <ActivityRings rings={rings} />
      <textarea value={JSON.stringify(rings)} onChange={(e) => setRings(JSON.parse(e.target.value))}></textarea> 
    </>
  );
}
