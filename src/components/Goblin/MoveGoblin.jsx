import React, {lazy, Suspense, useRef, useState} from "react";
import { useFrame, useThree,  } from "react-three-fiber";
import { PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'
import GoblinMovingLights from "./GoblinMovingLights";
const Model = lazy(() => import("../Utility/Model"));

const MoveGoblin = (props) => {
  const ref = useRef();

  const {camera, scene } = useThree();
  const [moveSpeed, setMoveSpeed] = useState(0.1)
  const [cameraMove, setcameraMove] = useState(0.09999)

  useFrame((state)=> {
    // console.log(ref.current)
    const arr = [
      ref.current.position.x,
      ref.current.position.y,
      ref.current.position.z,
    ]
    if (ref.current.position.z > -40) {
      ref.current.position.z -= moveSpeed
      // camera.position.x -= cameraMove
    }
    camera.lookAt(...arr)
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