import React, {lazy, Suspense, useRef, useState} from "react";
import { useFrame, useThree,  } from "react-three-fiber";
import { PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'
import GoblinMovingLights from "./GoblinMovingLights";
import BoundingBox from "../Utility/BoundingBox";
const Model = lazy(() => import("../Utility/Model"));



const MoveGoblin = (props) => {
  const ref = useRef();

  const { camera, scene } = useThree();
  const [moveSpeed, setMoveSpeed] = useState(0.1)
  const [cameraMove, setcameraMove] = useState(0.09999)
  const vec = new THREE.Vector3();
  console.log(scene.orbitControls)
  useFrame((state)=> {

    const {x,y,z} = ref.current.position
    if (ref.current.position.z > -40) {
      ref.current.position.z -= moveSpeed

      camera.position.lerp(vec.set(x,y,z), .01)
      scene.orbitControls.target.lerp(vec.set(x,y,z), .01);
      // state.camera.position.lerp(vec.set(z,y,x), .01)
      // scene.orbitControls.update();
    }
  })

  return (
    <group
      {...props}
      ref={ref}
    >

      <GoblinMovingLights/>
      <BoundingBox
        visible
        dims={[4,4,4]}
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