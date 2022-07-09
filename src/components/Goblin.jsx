import React, {lazy, Suspense} from "react";
import * as THREE from 'three'
const Model = lazy(() => import("./Model"));


const Goblin = (props) => {



  return (
    <group rotation={[0, 90, 0]}>
      <Suspense>
        <Model
          path={'/desert_racer/scene.gltf'}
          scale={new Array(3).fill(.04)}
          side={THREE.FrontSide}
          transparent={false}
          opacity={1}
          depthWrite={true}
          depthTest={true}
          />
      </Suspense>
    </group>
  )
}


export default Goblin