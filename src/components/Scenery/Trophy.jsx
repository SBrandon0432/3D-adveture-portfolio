import { useFrame } from "@react-three/fiber";
import React, { lazy, Suspense, useRef } from "react";
const Model = lazy(()=> import('../Utility/Model'))


const Trophy = (props) => {

  const ref = useRef();

  useFrame(()=> {
    ref.current.rotation.y += 0.001
  })
  return (
    <group
      className = 'Trophy'
      position={props?.position}
      ref = {ref}
      {...props}
      >

        <Suspense>
          <Model
            path = {'/Models/trophy/scene.gltf'}
            scale = {props?.scale}
            />
        </Suspense>
    </group>
  )
}


export default Trophy