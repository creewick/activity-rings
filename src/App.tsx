import React, { useState } from 'react';
import ActivityRings from './ActivityRings/ActivityRings';

export default function App() {
  const [rings, setRings] = useState([
    { value: 0.9 },
    { value: 0.6 },
    { value: 0.3 },
  ]);

  function change(e: React.ChangeEvent<HTMLInputElement>, index: number) {
    const newRings = [...rings];
    newRings[index].value = parseFloat(e.target.value);
    setRings(newRings);
  }

  function remove(index: number) {
    const newRings = [...rings];
    newRings.splice(index, 1);
    setRings(newRings);
  }

  function add() {
    const newRings = [...rings];
    newRings.push({ value: 0 });
    setRings(newRings);
  }

  return (
    <>
      <div className="activity-rings">
        <ActivityRings rings={rings} />
      </div>    
      {rings.map((ring, index) => 
        <span key={index} >
          <button onClick={() => remove(index)}>-</button>
          <input type="number" min="0" step="0.1" value={ring.value} onChange={e => change(e, index)} />
        </span>
      )}
      <button onClick={() => add()}>+</button>
    </>
  );
}
