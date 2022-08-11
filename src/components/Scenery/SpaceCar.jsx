import React, { lazy, Suspense, useRef } from "react";
const Model = lazy(()=> import('../Utility/Model'))


const SpaceCar = (props) => {

  const ref = useRef();

  return (
    <group
      className = 'SpaceCar'
      position={props?.position}
      ref = {ref}
      {...props}
      >

        <Suspense>
          <Model
            path = {'/Models/futuristic_car_2/scene.gltf'}
            scale = {props?.scale}
            />
        </Suspense>
    </group>
  )
}


export default SpaceCar