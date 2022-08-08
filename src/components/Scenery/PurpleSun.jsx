import React, { lazy, Suspense, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
const Model = lazy(()=> import('../Utility/Model'))


const Sun = (props) => {
  const {
    scene,
    gl,
    camera
  } = useThree();
  const ref = useRef();

  useFrame((state)=> {
    // ref.current.rotation.x += 0.0001
    // ref.current.rotation.y += 0.001
  })

  return (
    <group
      className = 'sun'
      position={props?.position}
      ref = {ref}
      {...props}
      >

        <Suspense>
          <Model
            path = {'/Models/purple_planet/scene.gltf'}
            scale = {props?.scale}
            animation={true}
            />
        </Suspense>
    </group>
  )
}


export default Sun