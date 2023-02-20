import React from "react";
import { Circle, Rect } from "react-konva";

const RectComponent = (props: any) => {

console.log(props,999);
return (
    // <Circle x={props.x} y={props.y} radius={props.radius} fill={props.fill} />
    <Rect x={100} y={150} height={50} width={70} fill="transparent" stroke="white" />
  );

}

export default RectComponent;