import React, { lazy, Suspense, useRef } from "react";
import { useFrame, useThree } from "react-three-fiber";
const Model = lazy(()=> import('../Utility/Model'))


const SpaceGlobe = (props) => {
  const {
    scene,
    gl,
    camera
  } = useThree();
  const ref = useRef();


  return (
    <group
      className = 'SpaceGlobe'
      position={props?.position}
      ref = {ref}
      {...props}
      >

        <Suspense>
          <Model
            path = {'/Models/space_globe/scene.gltf'}
            scale = {props?.scale}
            />
        </Suspense>
    </group>
  )
}


export default SpaceGlobe