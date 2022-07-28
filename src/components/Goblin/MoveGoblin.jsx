import React, {lazy, Suspense, useRef, useState} from "react";
import { useFrame, useThree,  } from "react-three-fiber";
import GoblinMovingLights from "./GoblinMovingLights";
import BoundingBox from "../Utility/BoundingBox";
import CameraState from "../../State/CameraState";
const Model = lazy(() => import("../Utility/Model"));



const MoveGoblin = (props) => {
  const ref = useRef();
  const { camera, scene } = useThree();
  const [moveSpeed, setMoveSpeed] = useState(0.16)
  const [stop, setStop] = useState(-40)

  useFrame((state)=> {

    if (ref.current.position.z >= stop) {
      // ref.current.position.z -= moveSpeed
      ref.current.position.z.lerp([0,0,-40], moveSpeed)
      camera.position.lerp(CameraState.cameraPos1, 0.007)
      scene.orbitControls.target.lerp(CameraState.target1 , 0.009)
      scene.orbitControls.update();
      console.log(ref.current.position.z)
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