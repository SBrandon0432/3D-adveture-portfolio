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

  console.log(ref.current, 'sign')
  useFrame((state)=> {
    // ref.current.rotation.x += 0.0001
    // ref.current.rotation.y += 0.001
  })

  return (
    <group
      position={props?.position}
      ref = {ref}
      {...props}
      >

        <Suspense>
          <Model
            path={'/Models/stylized_wood_signs/scene.gltf'}
            scale = {props?.scale}
            show={true}
            />
        </Suspense>
    </group>
  )
}


export default Sign