import React, {lazy, Suspense, useState, useEffect, useRef} from "react";
import { useThree, useFrame } from "@react-three/fiber";
import Text from '../Scenery/Text'
import font from 'three/examples/fonts/gentilis_regular.typeface.json'
import Plane from "../Shapes/Plane";
import BoundingBox from "../Utility/BoundingBox";
import SpaceCar from "../Scenery/SpaceCar";
import ClassicCar from "../Scenery/ClassicCar";
import Trophy from "../Scenery/Trophy";
import CarStopLights from "../Lights/SceneryLights/CarStopLights";
import SpaceShip from "../Scenery/SpaceShip";
const Model = lazy( () => import('../Utility/Model'));

const CarStop = (props) => {
  const ref = useRef();
  const mainCarGroupRef = useRef();
  const classicCarRef = useRef();
  const trophyRef = useRef();
  const spaceShipRef = useRef();

  useFrame(()=> {
    mainCarGroupRef.current.rotation.y += 0.004
    classicCarRef.current.rotation.y -= 0.003
    trophyRef.current.rotation.y -= 0.003
  })

  return (
    <group
      position={props?.position}
      rotation={props?.rotation}
      {...props}
      ref={ref}
      castShadow
      receiveShadow
    >
      <group
        ref={mainCarGroupRef}
        castShadow
        receiveShadow
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
        castShadow
        receiveShadow
      >
        <Plane/>
        <ClassicCar
          scale = {new Array(3).fill(7)}
          position ={[0,-0.2,0]}
        />
      </group>

      <group
        ref={spaceShipRef}
        position = {[40,20,65]}
        rotation = {[0,0,0.7]}
        castShadow
        receiveShadow
      >
        <SpaceShip
          scale = {new Array(3).fill(0.2)}
          position ={[0,-0.2,0]}
        />
      </group>

      <group
        ref={trophyRef}
        onClick = {()=> {
          window.location = 'https://master.d258lkzp17ij6b.amplifyapp.com/';
        }}
        castShadow
        receiveShadow
        >
        <Text
              position={[0.9 ,7.9, -1]}
              rotation={[0,3.84,0]}
              scale={new Array(3).fill(1)}
              path={font}
              color={'#00a2ff'}
              emissiveColor={'#ffc800'}
              text = {"Car Shop!"}
              curveSegments={12}
              />
        <Trophy
            scale = {new Array(3).fill(2)}
            position = {[0,7,0]}
            rotation = {[0,3.84,0]}
            />
      </group>

      <CarStopLights/>
    </group>
  )
}

export default CarStop;