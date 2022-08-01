import React, {lazy, Suspense, useRef, useState} from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from 'three'
import BulbPointLight from "../../Lights/BulbPointLight";

const NatureStopLights = (props) => {
  return (
    <group className = 'nature_stop_lights' >


      <BulbPointLight
          position={[0,-7,-13]}
          color={'purple'}
          emissive={''}
          intensity={3}
          radius={[0]}
          />

      <BulbPointLight
          position={[-5,4,-13]}
          color={'red'}
          emissive={''}
          intensity={2}
          radius={[0]}
          />

    </group>

  )
}

export default NatureStopLights;