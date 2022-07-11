import React, {lazy, Suspense, useRef, useState} from "react";
import { useFrame, useThree } from "react-three-fiber";
import * as THREE from 'three'
import Bulb from "./Bulb";
const Model = lazy(() => import("./Model"));


const Goblin = (props) => {
  const ref = useRef();
  const {camera, scene } = useThree();
  const [moveSpeed, setMoveSpeed] = useState(0.05)


  useFrame((state)=> {
    // console.log(ref.current.position, 'ref potion in move goblin')
    // console.log(state.camera.position, 'camera potion in move goblin')

    state.camera.lookAt(ref.current.position)
    ref.current.position.z -= moveSpeed
    camera.position.x -= moveSpeed
  })

  return (
    <group
      {...props}
      ref={ref}
    >
      <Suspense>
        <Model
          path={'/desert_racer/scene.gltf'}
          scale={new Array(3).fill(.028)}
          />
      </Suspense>
    </group>
  )
}


export default Goblin