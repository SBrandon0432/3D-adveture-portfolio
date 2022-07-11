import React, {lazy, Suspense, useRef, useState} from "react";
import { useFrame, useThree } from "react-three-fiber";
import * as THREE from 'three'
import GoblinMovingLights from "./GoblinMovingLights";
const Model = lazy(() => import("../Utility/Model"));

const MoveGoblin = (props) => {
  const ref = useRef();
  const {camera, scene } = useThree();
  const [moveSpeed, setMoveSpeed] = useState(0.1)
  const [cameraMove, setcameraMove] = useState(0.09999)



  useFrame((state)=> {
    state.camera.lookAt(ref.current.position)
    ref.current.position.z -= moveSpeed
    camera.position.x -= cameraMove
    camera.position.z -= 0.007


  })

  return (
    <group
      {...props}
      ref={ref}
    >
      <GoblinMovingLights/>
      <Suspense>
        <Model
          path={'/Models/desert_racer/scene.gltf'}
          scale={new Array(3).fill(.028)}
          animate={true}
          />
      </Suspense>
    </group>
  )
}


export default MoveGoblin