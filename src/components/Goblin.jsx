import React, {lazy, Suspense} from "react";
import * as THREE from 'three'
const Model = lazy(() => import("./Model"));


const Goblin = (props) => {



  return (
    <group
      {...props}
    >
      <Suspense>
        <Model
          path={'/desert_racer/scene.gltf'}
          scale={new Array(3).fill(.04)}
          />
      </Suspense>
    </group>
  )
}


export default Goblin