import React from 'react';
import { ActivityRingInternalProps } from './ActivityRingInternalProps';

export default function ActivityRingRounding(props: ActivityRingInternalProps) {
  const { index, value, arcWidth, arcAngle, color, colorCurrent, arcStartX, arcStartY, arcEndX, arcEndY } = props;
  const shadowId = `shadow-${index}`;

  const shadowX = Math.cos(arcAngle) * (arcWidth * 0.12);
  const shadowY = Math.sin(arcAngle) * (arcWidth * 0.12);

  return <>
    <defs>
      <filter id={shadowId} x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx={shadowX} dy={shadowY} stdDeviation={arcWidth * 0.06} floodColor="#0008" />
      </filter>
    </defs>
    { value < 1 && <circle cx={arcStartX} cy={arcStartY} r={arcWidth / 2} fill={color} /> }
    <circle cx={arcEndX} cy={arcEndY} r={arcWidth / 2} fill={colorCurrent} filter={`url(#${shadowId})`} />
  </>;
}