import React,{lazy, Suspense} from "react";
import * as THREE from 'three';
import Sun from "./Sun";
import BulbPointLight from "../Lights/BulbPointLight";
import Sign from "./Sign";
import Text from '../Scenery/Text'
const Model = lazy(() => import("../Utility/Model"));


const JapaneseHouse = (props) => {



  return (
    <group
      className='japanese_house'
      {...props}
      >

        <BulbPointLight
          position = {[-50,7,20]}
          color={'orange'}
          intensity = {10}
        />
        <Sun
          position={[-50,7,20]}
          scale={new Array(3).fill(1.2)}
          />

        <Sign
          position={[-14.6,-13,-27.21]}
          scale={new Array(3).fill(1.16)}

        />
          <Text
            position={[-10,-9.32,-19.4]}
            rotation={[0,2.23,0]}
            scale={new Array(3).fill(0.4)}
            path={'/Font/smile_candy/Smile Candy_Regular.json'}
            color={'#00a2ff'}
            emissiveColor={'#ffc800'}
            text={'GitHub!'}
            />

      <Suspense>
        <Model
          path={'/Models/mobile_home/scene.gltf'}
          scale={new Array(3).fill(.9)}
          animate={true}
          />
      </Suspense>

    </group>
  )
}


export default JapaneseHouse;