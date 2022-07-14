import React, { lazy, Suspense, useRef } from "react";
import { useFrame, useThree } from "react-three-fiber";
const Model = lazy(()=> import('../Utility/Model'))


const Sign = (props) => {
  const {
    scene,
    gl,
    camera
  } = useThree();
  const ref = useRef();

  useFrame((state)=> {

  })

  return (
    <group
      position={props?.position}
      ref = {ref}
      {...props}
      >
        <mesh>

        </mesh>
    </group>
  )
}


export default Sign