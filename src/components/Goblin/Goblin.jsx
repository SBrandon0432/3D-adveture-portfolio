import React, {lazy, Suspense, useRef, useState} from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from 'three'
import MoveGoblin from "./MoveGoblin";
import GoblinStillLights from "./GoblinStillLights";
import EffectsGoblin from "../Effects/EffectsGoblin";
import BoundingBox from "../Utility/BoundingBox";
import CameraState from "../../State/CameraState";
const Model = lazy(() => import("../Utility/Model"));


const Goblin = (props) => {
  const ref = useRef();
  const {camera } = useThree();
  const [isMove, setIsMove] = useState(null);
  const [position, setPosition] = useState([0,0,0])
  // useFrame(()=> {
  //   if(!isMove) {
  //     camera.position.lerp(CameraState.cameraPos, .001)
  //   }
  // })


  return (
    <group
      {...props}
      ref={ref}
      onClick={()=> setIsMove(true)}
      >
      <GoblinStillLights />

        {
          isMove ?
          <MoveGoblin
          handler={setIsMove}
          setPos = {setPosition}
          />
          :
          <BoundingBox
          dims={[2,1.6,2]}
          visible
          position = {position}
          >

            <Model
              path={'/Models/desert_racer/scene.gltf'}
              scale={new Array(3).fill(.028)}
              />
            </BoundingBox>
        }

      {/* <EffectsGoblin/> */}
    </group >
  )
}


export default Goblin


