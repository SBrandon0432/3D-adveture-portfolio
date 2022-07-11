import React,{lazy, Suspense} from "react";
import * as THREE from 'three';
import Dragables from "../Utility/DragControls";
import Sun from "./Sun";
const Model = lazy(() => import("../Utility/Model"));


const JapaneseHouse = (props) => {



  return (
    <group
      className='japanese_house'
      {...props}
      >
        <Sun
          position={[0,0,0]}

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