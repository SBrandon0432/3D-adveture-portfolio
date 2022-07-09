import React, {lazy} from "react";
import * as THREE from 'three'
const Model = lazy(() => import("./Model"));


const Goblin = (props) => {



  return (
    <Model
      path={'/desert_racer/scene.gltf'}
      scale={new Array(3).fill(.04)}
      />
  )
}


export default Goblin