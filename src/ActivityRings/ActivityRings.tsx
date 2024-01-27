import React from 'react';
import { ActivityRingsProps } from './ActivityRingsProps';
import ActivityRing from './ActivityRing';

export default function ActivityRings(props: ActivityRingsProps) {
  const width = props.width ?? 440;

  return (
    <svg width={width} height={width} viewBox="0 0 100 100">
      <circle cx="50%" cy="50%" r="50%" fill="#000" />
      { props.rings.map((ringProps, index) => 
        <ActivityRing key={index} index={index} {...props} {...ringProps} />) 
      }
    </svg>
  );
}