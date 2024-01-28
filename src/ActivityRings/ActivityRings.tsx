import React from 'react';
import { ActivityRingsProps } from './ActivityRingsProps';
import ActivityRing from './ActivityRing';
import { animated, useSpring } from '@react-spring/web';
import { ActivityRingProps } from './ActivityRingProps';

const AnimatedActivityRing = animated(ActivityRing);

function ActivityRingSpring(props: ActivityRingsProps & ActivityRingProps & { index: number }) {
  const {value} = useSpring({
    value: props.value, 
    from: {value: 0},
  });

  return <AnimatedActivityRing {...props} value={value.to(v => v)} />;
}

export default function ActivityRings(props: ActivityRingsProps) {
  const width = props.width ?? 440;
  const animated = props.animated !== false;


  return (
    <svg width={width} height={width} viewBox="0 0 100 100">
      <circle cx="50%" cy="50%" r="50%" fill="#000" />
      { animated && props.rings.map((ringProps, index) => 
        <ActivityRingSpring key={index} index={index} {...props} {...ringProps} />
      )}
      { !animated && props.rings.map((ringProps, index) => 
        <ActivityRing key={index} index={index} {...props} {...ringProps} />
      )}
    </svg>
  );
}