import React, {lazy, Suspense, useState, useEffect, useRef} from "react";
import { useThree, useFrame } from "@react-three/fiber";
import Text from '../Scenery/Text'
import font from 'three/examples/fonts/gentilis_regular.typeface.json'
import Plane from "../Shapes/Plane";
import BoundingBox from "../Utility/BoundingBox";
import SpaceCar from "../Scenery/SpaceCar";
import ClassicCar from "../Scenery/ClassicCar";
const Model = lazy( () => import('../Utility/Model'));

const CarStop = (props) => {
  const ref = useRef();
  const mainCarGroupRef = useRef();
  const classicCarRef = useRef();

  useFrame(()=> {
    mainCarGroupRef.current.rotation.y += 0.004

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
        <Plane/>
        <SpaceCar
          scale = {new Array(3).fill(.07)}
          position = {[3.3,1,0]}
          rotation = {[-0.1,-0.008, 0.09]}
        />
      </group>



      <group
        ref={classicCarRef}
        position = {[5,10,5]}
      >
        <Plane />
        <ClassicCar
          scale = {new Array(3).fill(7)}
        />
      </group>

    </group>
  )
}

export default CarStop;