import React, { lazy, useMemo } from "react";
const sphere = lazy(() => import('../Shapes/Sphere'));

const BulbPointLight = (props) => {


  return (

      <mesh className='BulbPointLight' {...props}>
        <pointLight intensity={props?.intensity} color={props.color} ref={props?.lightRef}/>
        <sphere args={[props.radius]}/>
        <meshPhongMaterial emissive={props?.emissive}/>
      </mesh>
  )
}


export default BulbPointLight