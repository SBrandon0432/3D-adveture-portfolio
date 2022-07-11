import React, {lazy, Suspense, useRef, useState} from "react";
import { useFrame, useThree } from "react-three-fiber";
import * as THREE from 'three'
import MoveGoblin from "./MoveGoblin";
import GoblinStillLights from "./GoblinStillLights";
import EffectsGoblin from "../Effects/EffectsGoblin";
const Model = lazy(() => import("../Utility/Model"));


const Goblin = (props) => {
  const ref = useRef();
  const {camera } = useThree();
  const [isMove, setIsMove] = useState(false);
  console.log(props)
  return (
    <group
      {...props}
      ref={ref}
      onClick={()=> setIsMove(true)}
    >
      <GoblinStillLights />
      <Suspense>
        {
          isMove ?
            <MoveGoblin
            />
            :
            <Model
              path={'/Models/desert_racer/scene.gltf'}
              scale={new Array(3).fill(.028)}
              />
        }
      </Suspense>
      <EffectsGoblin/>
    </group >
  )
}


export default Goblin


