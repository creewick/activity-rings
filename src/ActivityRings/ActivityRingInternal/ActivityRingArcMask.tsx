import React from 'react';
import { ActivityRingInternalProps } from './ActivityRingInternalProps';

export default function ActivityRingArcMask(props: ActivityRingInternalProps & { maskId: string }) {
  const { value, arcWidth, arcRadius, arcStartX, arcStartY, arcEndX, arcEndY, maskId } = props;
  const isLargeArc = value > 0.5 ? 1 : 0;

  const backgroundMask = () =>
    <circle cx="50" cy="50" r={arcRadius} stroke="#222" strokeWidth={arcWidth} fill="none" />;

  const foregroundMask = () => {
    if (value >= 1)
      return <circle cx="50" cy="50" r={arcRadius} stroke="white" strokeWidth={arcWidth} fill="none" />;

    return <path d={`M ${arcStartX} ${arcStartY} A ${arcRadius} ${arcRadius} 0 ${isLargeArc} 1 ${arcEndX} ${arcEndY}`}
      strokeWidth={arcWidth}
      stroke="white"
      fill="none"
    />; 
  };

  return (
    <defs>
      <mask x={-arcWidth} y={-arcWidth} width={100} height={100} id={maskId}>
        {backgroundMask()}
        {foregroundMask()}
      </mask>
    </defs>
  );
}