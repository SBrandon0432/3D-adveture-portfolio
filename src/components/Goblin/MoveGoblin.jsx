import React, {lazy, Suspense, useRef, useState} from "react";
import * as THREE from 'three'
import { useFrame, useThree,  } from "@react-three/fiber";
import GoblinMovingLights from "./GoblinMovingLights";
import BoundingBox from "../Utility/BoundingBox";
import CameraState from "../../State/CameraState";
import { Vector3 } from "three";
const Model = lazy(() => import("../Utility/Model"));



const MoveGoblin = (props) => {
  const ref = useRef();
  const { camera, scene } = useThree();
  let [stop, setStop] = useState(-40)
  const vec1 = new Vector3(0,0,-40)
  const vec2 = new Vector3(0,0,-90)
  const [currentVec, setCurrentVec] = useState(vec1)
  const [cameraTar, setCameraTar] = useState(CameraState.target1)
  const [cameraPos, setCameraPos] = useState(CameraState.cameraPos1)


  useFrame((state)=> {

    if (ref.current.position.z >= stop) {
      ref.current.position.lerp(currentVec, 0.007)
      camera.position.lerp(cameraPos, 0.007)
      scene.orbitControls.target.lerp(cameraTar , 0.009)
      scene.orbitControls.update();
    }

  })

  return (
    <group
      {...props}
      ref={ref}
      onClick={()=> {
        setStop(stop -= 40)
        setCurrentVec(vec2)
        setCameraTar(CameraState.target2);
        setCameraPos(CameraState.cameraPos2);
      }}
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