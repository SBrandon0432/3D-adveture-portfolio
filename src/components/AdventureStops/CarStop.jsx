import React, {lazy, Suspense, useState, useEffect, useRef} from "react";
import { useThree, useFrame } from "@react-three/fiber";
import Text from '../Scenery/Text'
import font from 'three/examples/fonts/gentilis_regular.typeface.json'
import Plane from "../Shapes/Plane";
import BoundingBox from "../Utility/BoundingBox";
import SpaceCar from "../Scenery/SpaceCar";
import ClassicCar from "../Scenery/ClassicCar";
import Trophy from "../Scenery/Trophy";
const Model = lazy( () => import('../Utility/Model'));

const CarStop = (props) => {
  const ref = useRef();
  const mainCarGroupRef = useRef();
  const classicCarRef = useRef();

  useFrame(()=> {
    mainCarGroupRef.current.rotation.y += 0.004
    classicCarRef.current.rotation.y -= 0.003
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
        position = {[20,10,-13]}
        rotation = {[0,0,0.7]}
      >
        <axesHelper args={[10,10,10]}/>
        <Plane/>
        <ClassicCar
          scale = {new Array(3).fill(7)}
          position ={[0,-0.2,0]}
        />
      </group>

      <group>
        <Text
              position={[0.8 ,1, 0]}
              rotation={[0,3.23,0]}
              scale={new Array(3).fill(0.6)}
              path={font}
              color={'#00a2ff'}
              emissiveColor={'#ffc800'}
              text = {"Car Shop!"}
              curveSegments={12}
              />
        <Trophy
            scale = {new Array(3).fill(2)}
            position = {[0,7,3]}
            />
      </group>

    </group>
  )
}

export default CarStop;