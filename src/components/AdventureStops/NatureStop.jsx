import React, {lazy, Suspense, useState, useEffect, useRef} from "react";
import { useThree, useFrame } from "@react-three/fiber";
import BulbPointLight from "../Lights/BulbPointLight";
import SpaceGlobe from "../Scenery/SpaceGlobe";
import Text from '../Scenery/Text'
import font from 'three/examples/fonts/gentilis_regular.typeface.json'
import NatureStopLights from '../Lights/SceneryLights/NatureStopLights'
import BoundingBox from "../Utility/BoundingBox";
import PurpleSun from '../Scenery/PurpleSun';

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

        <BoundingBox
          dims={[4,4,4]}
          position={[9.5 ,-2, -7.2]}
          >
          <group
            onClick={(e)=> {
              window.location = 'https://master.d399jz8oeudk7y.amplifyapp.com/'
            }}
          >
            <Text
              position={[0.8 ,1, 0]}
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
            </group>
        </BoundingBox>

        <PurpleSun
          scale = {new Array(3).fill(2)}
          position={[6,15,9]}
          rotation = {[-1,0,0]}
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