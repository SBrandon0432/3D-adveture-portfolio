import React, {lazy, Suspense, useRef, useState} from "react";
import { useFrame, useThree } from "react-three-fiber";
import * as THREE from 'three'
import BulbPointLight from "../Lights/BulbPointLight";
const Model = lazy(() => import("../Utility/Model"));

const MoveGoblin = (props) => {
  const ref = useRef();
  const {camera, scene } = useThree();
  const [moveSpeed, setMoveSpeed] = useState(0.05)


  useFrame((state)=> {
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
          path={'/Models/desert_racer/scene.gltf'}
          scale={new Array(3).fill(.028)}
          />
      </Suspense>
    </group>
  )
}


export default MoveGoblin