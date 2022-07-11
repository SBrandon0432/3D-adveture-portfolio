import React, {lazy, Suspense, useRef, useState} from "react";
import { useFrame, useThree } from "react-three-fiber";
import * as THREE from 'three'
import BulbPointLight from "../Lights/BulbPointLight";
import MoveGoblin from "./MoveGoblin";
const Model = lazy(() => import("../Model"));


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

      <BulbPointLight  position={[0, 3, 0]} color={'red'}/>
      <Suspense>
        {
          isMove ?
            <MoveGoblin
            />
            :
            <Model
              path={'/desert_racer/scene.gltf'}
              scale={new Array(3).fill(.028)}
              />
        }
      </Suspense>
    </group >
  )
}


export default Goblin


