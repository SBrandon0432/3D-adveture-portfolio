import React,{lazy, Suspense} from "react";
import * as THREE from 'three';
import Dragables from "../Utility/DragControls";
import Sun from "./Sun";
import BulbPointLight from "../Lights/BulbPointLight";
import Sign from "./Sign";
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
          position={[-12,-13.5,-29]}
          scale={new Array(3).fill(1)}
          animate={true}
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