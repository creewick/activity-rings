import React, { useMemo } from 'react';
import { ActivityRingProps } from './ActivityRingProps';
import { ActivityRingsProps } from './ActivityRingsProps';
import ActivityRingArc from './ActivityRingInternal/ActivityRingArc';
import ActivityRingRounding from './ActivityRingInternal/ActivityRingRounding';
import { ActivityRingInternalProps } from './ActivityRingInternal/ActivityRingInternalProps';
import DefaultColors from './DefaultColors';
import tinycolor from 'tinycolor2';

export default function ActivityRings(props: ActivityRingProps & ActivityRingsProps & { index: number }) {
  const arcWidth = props.ringWidth ?? 10;
  const arcRadius = Math.max(0, 49 - props.index * (arcWidth + 1) - arcWidth / 2);
  const arcAngle = props.value * 2 * Math.PI;

  const arcStartX = 50;
  const arcStartY = 50 - arcRadius;
  const arcEndX = 50 + arcRadius * Math.sin(arcAngle);
  const arcEndY = 50 - arcRadius * Math.cos(arcAngle);

  const color = props.color ?? DefaultColors[props.index % DefaultColors.length];
  const color2 = useMemo(() => tinycolor(color).spin(-5).lighten(5).toHexString(), [color]);
  const color3 = useMemo(() => tinycolor(color).spin(-10).lighten(10).toHexString(), [color]);
  const colorCurrent = useMemo(() => 
    tinycolor.mix(color, color3, Math.min(100, props.value * 100)).toHexString(), 
  [color, color3, props.value]
  );

  const internalProps: ActivityRingInternalProps = {
    ...props, arcWidth, arcRadius, arcAngle, arcStartX, arcStartY, arcEndX, arcEndY, color, color2, color3, colorCurrent
  };

  return (
    <g>
      <ActivityRingArc {...internalProps} />
      {props.value > 0 && <ActivityRingRounding {...internalProps} />}
    </g>
  );
}
