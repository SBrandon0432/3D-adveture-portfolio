import React, {lazy, Suspense, useRef, useState} from "react";
import { useFrame, useThree,  } from "react-three-fiber";
import { PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'
import GoblinMovingLights from "./GoblinMovingLights";
import BoundingBox from "../Utility/BoundingBox";
import CameraState from "../../State/CameraState";
import { preProcessFile } from "typescript";
const Model = lazy(() => import("../Utility/Model"));



const MoveGoblin = (props) => {
  const ref = useRef();
  const { camera, scene } = useThree();
  const [moveSpeed, setMoveSpeed] = useState(0.16)

  useFrame((state)=> {

    if (ref.current.position.z > -40) {
      ref.current.position.z -= moveSpeed
      camera.position.lerp(CameraState.cameraPos1, 0.007)
      scene.orbitControls.target.lerp(CameraState.target1 , 0.009)
      scene.orbitControls.update();
    } else {
      // props.setPos([ref.current.position])
      // props.handler(null)
    }
  })

  return (
    <group
      {...props}
      ref={ref}

    >

      <GoblinMovingLights/>
      <BoundingBox
        dims={[2,1.6,2]}

      >

      <Suspense>
        <Model
          path={'/Models/desert_racer/scene.gltf'}
          scale={new Array(3).fill(.028)}
          animate={true}
          />
      </Suspense>
          </BoundingBox >
    </group>
  )
}


export default MoveGoblin