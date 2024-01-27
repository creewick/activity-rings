import { ActivityRingProps } from '../ActivityRingProps';

export interface ActivityRingInternalProps extends ActivityRingProps {
    index: number;
    
    arcWidth: number;
    arcRadius: number;
    arcAngle: number;
    
    arcStartX: number;
    arcStartY: number;
    arcEndX: number;
    arcEndY: number;

    color: string;
    color2: string;
    color3: string;
    colorCurrent: string;
}
