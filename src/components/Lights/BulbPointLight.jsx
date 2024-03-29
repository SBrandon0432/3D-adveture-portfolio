import React, { lazy, useMemo } from "react";

const BulbPointLight = (props) => {

  return (

      <mesh className='BulbPointLight' {...props}>
        <pointLight intensity={props?.intensity} color={props.color} ref={props?.lightRef}/>
        <sphereBufferGeometry args={[props.radius]}/>
        <meshPhongMaterial emissive={props?.emissive}/>
      </mesh>
  )
}


export default BulbPointLight