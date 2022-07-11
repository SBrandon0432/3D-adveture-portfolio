import React, {lazy, Suspense, useRef, useState} from "react";
import { useFrame, useThree } from "react-three-fiber";
import * as THREE from 'three'
import BulbPointLight from "../Lights/BulbPointLight";
import BoundingBox from "../Utility/BoundingBox";
import Dragables from "../Utility/DragControls";

const GoblinMovingLights = (props) => {
  console.log(props)
  return (
    <group className = 'goblin_moving_lights' >


      <BulbPointLight
          position={[0,4,0]}
          color={'purple'}
          emissive={''}
          intensity={3}
          radius={[0]}
          />

      <BulbPointLight
          position={[-5,4,4]}
          color={'white'}
          emissive={''}
          intensity={1}
          radius={[0]}
          />

    </group>

  )
}

export default GoblinMovingLights;