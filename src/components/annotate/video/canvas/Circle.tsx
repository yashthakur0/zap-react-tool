import React from "react";
import { Circle } from "react-konva";

const CircleComponent = (props: any) => {

console.log(props,999);
return (
    <Circle x={props.x} y={props.y} radius={props.radius} fill={props.fill} />
  );

}

export default CircleComponent;