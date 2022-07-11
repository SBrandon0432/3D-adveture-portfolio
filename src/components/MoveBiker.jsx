import React, {lazy, Suspense, useRef, useState} from "react";
import { useFrame, useThree } from "react-three-fiber";
import * as THREE from 'three'
import MoveGoblin from "./MoveBiker";
const Model = lazy(() => import("./Model"));


const Goblin = (props) => {
  const ref = useRef();
  const {camera } = useThree();
  console.log(camera)

  useFrame((state)=> {
    ref.current.position.x -= 0.01

  })

  return (
    <group
      {...props}
      ref={ref}
    >
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