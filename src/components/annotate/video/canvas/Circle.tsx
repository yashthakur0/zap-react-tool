import React from "react";
import { Layer, Circle } from "react-konva";

const CircleComponent = (props: any) => {

console.log(props,999);
return (
    <Circle x={props.x} y={props.y} radius={props.radius} fill={props.fill} />
  );

}

export default CircleComponent;




// <Layer ref={layerRef}>
    //   {regions.map(region => {
    //     const isSelected = region.id === selectedId;
    //     return (
    //       <React.Fragment key={region.id}>
    //         {/* first we need to erase previous drawings */}
    //         {/* we can do it with  destination-out blend mode */}
    //         <Line
    //           globalCompositeOperation="destination-out"
    //           points={region.points.flatMap(p => [p.x, p.y])}
    //           fill="black"
    //           listening={false}
    //           closed
    //         />
    //         {/* then we just draw new region */}
    //         <Line
    //           name="region"
    //           points={region.points.flatMap(p => [p.x, p.y])}
    //           fill={region.color}
    //           closed
    //           opacity={isSelected ? 1 : 0.8}
    //           onClick={() => {
    //             selectRegion(region.id);
    //           }}
    //         />
    //       </React.Fragment>
    //     );
    //   })}
    // </Layer>