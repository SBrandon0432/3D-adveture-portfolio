import React, {lazy, Suspense, useState, useEffect, useRef} from "react";
import { useThree, useFrame } from "react-three-fiber";
import BulbPointLight from "../Lights/BulbPointLight";
import SpaceGlobe from "./SpaceGlobe";
import Text from './Text'
import font from 'three/examples/fonts/gentilis_regular.typeface.json'
import NatureStopLights from "./SceneryLights/NatureStopLights";
import BoundingBox from "../Utility/BoundingBox";

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
      <NatureStopLights/>
      <group className='nature_stop__globe'>
        <Suspense>

        <BoundingBox
          dims={[4,4,4]}
          visible
          position={[4.5 ,-1.5, -6.2]}
          >
          <Text
            // position={[4.5 ,-1.5, -6.2]}
            rotation={[0,3.23,0]}
            scale={new Array(3).fill(0.6)}
            path={font}
            color={'#00a2ff'}
            emissiveColor={'#ffc800'}
            text = {"Nature Tours!"}
            curveSegments={12}
            />

          <SpaceGlobe
            path = {'/Models/space_globe/scene.gltf'}
            scale = {new Array(3).fill(.4)}
            // position = {[6 ,-3.5, -9.5]}
            rotation = {[-0.6,0,0.4]}
            animation = {true}
            />
        </BoundingBox>
            </Suspense>
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