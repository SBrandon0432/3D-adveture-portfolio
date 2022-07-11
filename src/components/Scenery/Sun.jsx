import React, { lazy, Suspense } from "react";
const Model = lazy(()=> import('../Utility/Model'))


const Sun = (props) => {


  return (
    <group
      className = 'sun'
      position={props?.position}
      {...props}
      >
        <Suspense>
          <Model
            path = {'/Models/sun/scene.gltf'}
            scale = {new Array(3).fill(1)}
            />
        </Suspense>
    </group>
  )
}


export default Sun