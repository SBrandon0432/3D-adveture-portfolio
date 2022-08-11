import React, {lazy, Suspense, useState, useEffect, useRef} from "react";
import { useThree, useFrame } from "@react-three/fiber";
import Text from '../Scenery/Text'
import font from 'three/examples/fonts/gentilis_regular.typeface.json'
import Plane from "../Shapes/Plane";
import BoundingBox from "../Utility/BoundingBox";
import SpaceCar from "../Scenery/SpaceCar";
const Model = lazy( () => import('../Utility/Model'));

const CarStop = (props) => {
  const ref = useRef();
  const mainCarGroupRef = useRef();
  const mainCarRef = useRef()

  useFrame(()=> {
    // mainCarRef.current.rotation.y += 0.01

  })

  return (
    <group
      position={props?.position}
      rotation={props?.rotation}
      {...props}
      ref={ref}
    >
      <group
        ref={mainCarGroupRef}
      >
        <axesHelper args={[10,10,10]}/>
        <Plane/>
        <SpaceCar
          scale = {new Array(3).fill(.07)}
          position = {[3.3,1,0]}
          rotation = {[-0.1,-0.008, 0.09]}
        />
      </group>
    </group>
  )
}

export default CarStop;