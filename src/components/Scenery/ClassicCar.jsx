import React, { lazy, Suspense, useRef } from "react";
const Model = lazy(()=> import('../Utility/Model'))


const ClassicCar = (props) => {

  const ref = useRef();

  return (
    <group
      className = 'ClassicCar'
      position={props?.position}
      ref = {ref}
      {...props}
      >

        <Suspense>
          <Model
            path = {'/Models/alfa_romeo_stradale_1967/scene.gltf'}
            scale = {props?.scale}
            />
        </Suspense>
    </group>
  )
}


export default ClassicCar