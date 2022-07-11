import React,{lazy, Suspense} from "react";
import * as THREE from 'three';
const Model = lazy(() => import("../Utility/Model"));


const JapaneseHouse = (props) => {



  return (
    <group
      className='japanese_house'
      {...props}
      >
      <Suspense>
        <Model
          path={'/Models/mobile_home/scene.gltf'}
          scale={new Array(3).fill(.9)}
          />
      </Suspense>
    </group>
  )
}


export default JapaneseHouse;