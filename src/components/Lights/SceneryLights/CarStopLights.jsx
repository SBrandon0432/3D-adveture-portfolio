import React, {lazy, Suspense, useRef, useState} from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from 'three'
import BulbPointLight from "../../Lights/BulbPointLight";

const CarStopLights = (props) => {
  return (
    <group className = 'car_stop_lights' >


      <BulbPointLight
          position={[0,15,-10]}
          color={'gold'}
          emissive={'gold'}
          intensity={3}
          radius={[0]}
          />

      <BulbPointLight
          position={[-10,15,-10]}
          color={'gold'}
          emissive={'gold'}
          intensity={3}
          radius={[0]}
          />



    </group>

  )
}

export default CarStopLights;