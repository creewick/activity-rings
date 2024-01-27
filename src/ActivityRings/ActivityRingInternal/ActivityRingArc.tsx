import React from 'react';
import ActivityRingArcMask from './ActivityRingArcMask';
import { ActivityRingInternalProps } from './ActivityRingInternalProps';

export default function ActivityRingArc(props: ActivityRingInternalProps) {
  const { index, value, arcWidth, arcAngle, arcRadius, color, color2, color3 } = props;
  const maskId = `mask-${index}`;
  const gradientId1 = `gradient-${index}-1`;
  const gradientId2 = `gradient-${index}-2`;

  const rotateAngle = value < 1 ? 0 : arcAngle * 180 / Math.PI;

  const linearGradient = (id: string, from: string, to: string, y1: string, y2: string) => <>
    <linearGradient id={id} x1="0%" x2="0%" y1={y1} y2={y2}>
      <stop offset="0%" stopColor={from} />
      <stop offset="100%" stopColor={to} />
    </linearGradient>
  </>;

  const arc = (startY: number, endY: number, gradientId: string) => <>
    <path 
      d={`M 50 ${startY} A ${arcRadius} ${arcRadius} 0 0 1 50 ${endY}`} 
      strokeWidth={arcWidth} 
      stroke={`url(#${gradientId})`} 
      fill="none"
    />
  </>;
  
  return (
    <g mask={`url(#${maskId})`} transform={`rotate(${rotateAngle}, 50, 50)`} >
      <defs>
        <ActivityRingArcMask {...props} maskId={maskId} />
        {linearGradient(gradientId1, color, color2, '0%', '100%')}
        {linearGradient(gradientId2, color2, color3, '100%', '0%')}
      </defs>
      {arc(50 - arcRadius, 50 + arcRadius, gradientId1)}
      {arc(50 + arcRadius, 50 - arcRadius, gradientId2)}
    </g>
  );
}