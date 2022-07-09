import React, {lazy} from "react";
import * as THREE from 'three'
const Model = lazy(() => import("./Model"));


const Goblin = (props) => {



  return (
    <group rotation={[0, 90, 0]}>
    <Model
      path={'/desert_racer/scene.gltf'}
      scale={new Array(3).fill(.04)}
      />
    </group>
  )
}


export default Goblin