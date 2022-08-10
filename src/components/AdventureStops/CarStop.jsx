import React, {lazy, Suspense, useState, useEffect, useRef} from "react";
import { useThree, useFrame } from "@react-three/fiber";
import Text from '../Scenery/Text'
import font from 'three/examples/fonts/gentilis_regular.typeface.json'
import Plane from "../Shapes/Plane";
const Model = lazy( () => import('../Utility/Model'));

const CarStop = (props) => {
  const ref = useRef();


  return (
    <group
      position={props?.position}
      rotation={props?.rotation}
      {...props}
      ref={ref}
    >
      <Plane

      />
      <Suspense>
        <Model
          path = {'/Models/futuristic_car_2/scene.gltf'}
          scale = {new Array(3).fill(.005)}
        />
      </Suspense>
    </group>
  )
}

export default CarStop;