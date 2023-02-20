import React, { useState } from "react";
import "./CanvasLayer.css";
import { Stage, Layer } from "react-konva";
import * as Konva from "konva"
import CircleComponent from "./Circle";


const CanvasLayer = () => {

  const [dot, setDots] = useState<any[]>([]);
  
  const dataSet:any = [
    {type:"dot", dataset:{x:420,y:30, radius:20, fill:"red"}},
    {type:"rect", dataset:{x:620,y:30, height:100, width:100, radius:20, fill:"red"}},
    {type:"dot", dataset:{x:120,y:30, radius:20, fill:"red"}},
    {type:"dot", dataset:{x:220,y:30, radius:20, fill:"red"}},
    {type:"dot", dataset:{x:320,y:30, radius:20, fill:"red"}}
  ]


  function addComment(e:any) {
    // let { clientX, clientY } = e.evt;
    // console.log(e.evt);
    // console.log(clientX, clientY);
    const stage = e.target.getStage();
    const stageLocation = stage.getPointerPosition();
    
    setDots([...dot, {x: stageLocation.x, y: stageLocation.y, radius: 10, fill: "red"}])
    console.log(dot,"Array")
  }

  function generate(e:any){

    let preSet:any = []
    dataSet.forEach((v:any) => {
      preSet = [...preSet, {x:v.dataset.x, y: v.dataset.y, radius: 10, fill: "red"}]
    });
    setDots(preSet)
  }

  function clearStage(e:any) {
    setDots([])
  }



  return (
    <div className="CanvasLayer">
      <Stage
        width={640}
        height={360}
        onClick={addComment}
      >
        <Layer>
        {dot.map((item, i) => ( <CircleComponent key={i} {...item}></CircleComponent> ))}
        </Layer>
      </Stage>

      <button className="btn" onClick={clearStage}>Clear</button>
      <button className="btn" onClick={generate}>Generate</button>
    </div>
  );
};

export default CanvasLayer;
