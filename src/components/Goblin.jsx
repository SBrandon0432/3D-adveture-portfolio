import React, {lazy, Suspense, useRef, useState} from "react";
import { useFrame, useThree } from "react-three-fiber";
import * as THREE from 'three'
import Bulb from "./Bulb";
import MoveGoblin from "./MoveBiker";
const Model = lazy(() => import("./Model"));


const Goblin = (props) => {
  const ref = useRef();
  const {camera } = useThree();

  return (
    <group
      {...props}
      ref={ref}
      onClick={()=> props.move(true)}
    >
      <Bulb  position={[0, 3, 0]} color={'white'}/>
      <Suspense>
        <Model
          path={'/desert_racer/scene.gltf'}
          scale={new Array(3).fill(.028)}
          />
      </Suspense>
    </group>
  )
}


export default Goblin