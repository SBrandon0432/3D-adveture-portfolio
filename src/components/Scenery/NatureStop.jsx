import React, {lazy, Suspense, useState, useEffect, useRef} from "react";
import { useThree, useFrame } from "react-three-fiber";
import BulbPointLight from "../Lights/BulbPointLight";
import SpaceGlobe from "./SpaceGlobe";
const Model = lazy(()=> import('../Utility/Model'));


const NatureStop = (props) => {

  const {scene} = useThree();
  const ref = useRef();
  useFrame((state)=> {
    // console.log(ref)
  })


  return (
    <group
      className='nature_stop'
      position={props?.position}
      rotation={props?.rotation}
      {...props}
      ref={ref}
    >

      <SpaceGlobe
        path = {'/Models/space_globe/scene.gltf'}
        scale = {new Array(3).fill(.4)}
        position = {[6 ,-3.5, -9.5]}
        animation = {true}
      />

      <Suspense>
        <Model
          path={'/Models/small_house_diorama/scene.gltf'}
          scale = {new Array(3).fill(1.1)}
        />
      </Suspense>


    </group>
  )
}



export default NatureStop;