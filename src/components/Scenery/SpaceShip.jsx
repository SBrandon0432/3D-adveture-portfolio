import React, { lazy, Suspense, useRef } from "react";
const Model = lazy(()=> import('../Utility/Model'))


const SpaceShip = (props) => {

  const ref = useRef();

  return (
    <group
      className = 'SpaceShip'
      position={props?.position}
      ref = {ref}
      {...props}
      >

        <Suspense>
          <Model
            path = {'/Models/jedi_star_fighter/scene.gltf'}
            scale = {props?.scale}
            />
        </Suspense>
    </group>
  )
}


export default SpaceShip