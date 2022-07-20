import React, {lazy, Suspense, useState, useEffect, useRef} from "react";
import { useThree, useFrame } from "react-three-fiber";
import BulbPointLight from "../Lights/BulbPointLight";
import SpaceGlobe from "./SpaceGlobe";
import Text from './Text'
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

      <group className='nature_stop__globe'>
        <Text
           position={[4.2 ,-1.5, -5.2]}
           rotation={[0,2.23,0]}
           scale={new Array(3).fill(0.6)}
           path={'/Font/smile_candy/Smile Candy_Regular.json'}
           color={'#00a2ff'}
           emissiveColor={'#ffc800'}
           text = {"Nature Tours!"}
           animation={true}
        />

        <SpaceGlobe
          path = {'/Models/space_globe/scene.gltf'}
          scale = {new Array(3).fill(.4)}
          position = {[6 ,-3.5, -9.5]}
          animation = {true}
          />
      </group>

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